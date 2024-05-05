package com.aizuda.snailjob.common.core.enums;

import lombok.Getter;

/**
 * 通知场景枚举
 *
 * @author: zuoJunLin
 * @date : 2023-12-02 18:18
 */
@Getter
public enum JobNotifySceneEnum {

    /********************************Job****************************************/
    JOB_TASK_ERROR(1, "JOB任务执行失败",  NodeTypeEnum.SERVER),


    /********************************Workflow****************************************/
    WORKFLOW_TASK_ERROR(100, "Workflow任务执行失败", NodeTypeEnum.SERVER),
    WORKFLOW_TASK_CALLBACK_ERROR(101, "回调节点任务执行失败", NodeTypeEnum.SERVER),
    WORKFLOW_TASK_DECISION_ERROR(102, "判定节点任务执行失败", NodeTypeEnum.SERVER),

    ;

    /**
     * 通知场景
     */
    private final int notifyScene;

    /**
     * 触发通知节点类型
     */
    private final NodeTypeEnum nodeType;

    /**
     * 描述
     */
    private final String desc;

    JobNotifySceneEnum(int notifyScene, String desc, NodeTypeEnum nodeType) {
        this.notifyScene = notifyScene;
        this.desc = desc;
        this.nodeType = nodeType;
    }

    /**
     * 获取通知场景
     *
     * @param notifyScene 场景
     * @param nodeType 触发通知节点类型
     * @return this
     */
    public static JobNotifySceneEnum getJobNotifyScene(int notifyScene, NodeTypeEnum nodeType) {
        for (JobNotifySceneEnum sceneEnum : JobNotifySceneEnum.values()) {
            if (sceneEnum.getNotifyScene() == notifyScene && sceneEnum.nodeType.getType().equals(nodeType.getType())) {
                return sceneEnum;
            }
        }

        return null;
    }


}
