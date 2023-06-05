package com.aizuda.easy.retry.server.support.dispatch.actor.result;

import akka.actor.AbstractActor;
import cn.hutool.core.lang.Assert;
import com.aizuda.easy.retry.common.core.constant.SystemConstants;
import com.aizuda.easy.retry.server.enums.TaskTypeEnum;
import com.aizuda.easy.retry.server.support.handler.CallbackRetryTaskHandler;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.PageDTO;
import com.aizuda.easy.retry.common.core.enums.RetryStatusEnum;
import com.aizuda.easy.retry.common.core.log.LogUtils;
import com.aizuda.easy.retry.server.exception.EasyRetryServerException;
import com.aizuda.easy.retry.server.persistence.mybatis.mapper.RetryTaskLogMapper;
import com.aizuda.easy.retry.server.persistence.mybatis.po.RetryTask;
import com.aizuda.easy.retry.server.persistence.mybatis.po.RetryTaskLog;
import com.aizuda.easy.retry.server.persistence.mybatis.po.SceneConfig;
import com.aizuda.easy.retry.server.persistence.support.ConfigAccess;
import com.aizuda.easy.retry.server.persistence.support.RetryTaskAccess;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.util.CollectionUtils;

import java.util.List;

/**
 * 重试完成执行器
 * 1、更新重试任务
 * 2、记录重试日志
 *
 * @author www.byteblogs.com
 * @date 2021-10-30
 * @since 2.0
 */
@Component("FailureActor")
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Slf4j
public class FailureActor extends AbstractActor {

    public static final String BEAN_NAME = "FailureActor";

    @Autowired
    @Qualifier("retryTaskAccessProcessor")
    private RetryTaskAccess<RetryTask> retryTaskAccess;
    @Autowired
    @Qualifier("configAccessProcessor")
    private ConfigAccess configAccess;
    @Autowired
    private RetryTaskLogMapper retryTaskLogMapper;
    @Autowired
    private CallbackRetryTaskHandler callbackRetryTaskHandler;
    @Autowired
    private TransactionTemplate transactionTemplate;

    @Override
    public Receive createReceive() {
        return receiveBuilder().match(RetryTask.class, retryTask -> {
            LogUtils.info(log, "FailureActor params:[{}]", retryTask);

            // 超过最大等级
            SceneConfig sceneConfig =
                    configAccess.getSceneConfigByGroupNameAndSceneName(retryTask.getGroupName(), retryTask.getSceneName());

            try {

                transactionTemplate.execute(new TransactionCallbackWithoutResult() {
                    @Override
                    protected void doInTransactionWithoutResult(TransactionStatus status) {

                        Integer maxRetryCount;
                        if (TaskTypeEnum.CALLBACK.getType().equals(retryTask.getTaskType())) {
                            maxRetryCount = SystemConstants.CALL_BACK.MAX_RETRY_COUNT;
                        } else {
                            maxRetryCount = sceneConfig.getMaxRetryCount();
                        }

                        if (maxRetryCount <= retryTask.getRetryCount()) {
                            retryTask.setRetryStatus(RetryStatusEnum.MAX_RETRY_COUNT.getStatus());
                            // 创建一个回调任务
                            callbackRetryTaskHandler.create(retryTask);
                        }

                        retryTaskAccess.updateRetryTask(retryTask);
                    }
                });
            } catch (Exception e) {
                LogUtils.error(log,"更新重试任务失败", e);
            } finally {
                getContext().stop(getSelf());

                // 记录重试日志
                PageDTO<RetryTaskLog> retryTaskLogPageDTO = retryTaskLogMapper.selectPage(new PageDTO<>(1, 1),
                        new LambdaQueryWrapper<RetryTaskLog>()
                                .eq(RetryTaskLog::getIdempotentId, retryTask.getIdempotentId())
                                .orderByDesc(RetryTaskLog::getId));

                List<RetryTaskLog> records = retryTaskLogPageDTO.getRecords();
                if (!CollectionUtils.isEmpty(records)) {
                    RetryTaskLog retryTaskLog = records.get(0);
                    retryTaskLog.setRetryStatus(retryTask.getRetryStatus());
                    Assert.isTrue(1 ==  retryTaskLogMapper.updateById(retryTaskLog),
                        () -> new EasyRetryServerException("更新重试日志失败"));
                }

            }

        }).build();

    }

}
