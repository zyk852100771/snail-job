package com.aizuda.easy.retry.server.retry.task.support.cache;

import com.aizuda.easy.retry.common.core.log.LogUtils;
import com.aizuda.easy.retry.server.common.Lifecycle;
import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import com.google.common.util.concurrent.RateLimiter;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

/**
 * 缓存通知限流组件
 *
 * @author zuoJunLin
 * @date 2023-11-20
 * @since 2.5.0
 */
@Component
@Data
@Slf4j
public class CacheNotifyRateLimiter implements Lifecycle {

    private static Cache<String, RateLimiter> CACHE;

    /**
     * 获取所有缓存
     *
     * @return 缓存对象
     */
    public static Cache<String, RateLimiter> getAll() {
        return CACHE;
    }

    /**
     * 获取所有缓存
     *
     * @return 缓存对象
     */
    public static RateLimiter getRateLimiterByKey(String key) {
        return CACHE.getIfPresent(key);
    }

    @Override
    public void start() {
        LogUtils.info(log, "CacheNotifyRateLimiter start");
        CACHE = CacheBuilder.newBuilder()
                // 设置并发级别为cpu核心数
                .concurrencyLevel(Runtime.getRuntime().availableProcessors())
                .expireAfterWrite(30, TimeUnit.MINUTES)
                .build();
    }

    @Override
    public void close() {
        LogUtils.info(log, "CacheNotifyRateLimiter stop");
    }
}
