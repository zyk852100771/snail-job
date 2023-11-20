package com.aizuda.easy.retry.server.web.model.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

/**
 * @author www.byteblogs.com
 * @date 2023-10-25 08:40:10
 * @since 2.4.0
 */
@Data
public class NotifyConfigRequestVO {

    private Long id;

    @NotBlank(message = "组名称 不能为空")
    @Pattern(regexp = "^[A-Za-z0-9_]{1,64}$", message = "仅支持长度为1~64字符且类型为数字、字母和下划线")
    private String groupName;

    private String sceneName;

    @NotNull(message = "通知状态不能为空")
    private Integer notifyStatus;

    @NotNull(message = "通知类型不能为空")
    private Integer notifyType;

    @NotBlank(message = "通知属性不能为空")
    private String notifyAttribute;

    private Integer notifyThreshold;

    @NotNull(message = "通知场景不能为空")
    private Integer notifyScene;

    @NotNull(message = "限流状态不能为空")
    private Integer rateLimiterStatus;

    private Integer rateLimiterThreshold;
    /**
     * 描述
     */
    private String description;

    /**
     * 是否删除
     */
    private Integer isDeleted;

}
