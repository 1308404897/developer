package com.gomcarter.developer.controller;

import com.gomcarter.developer.dto.SettingOfUserDto;
import com.gomcarter.developer.holder.UserHolder;
import com.gomcarter.developer.service.SettingOfUserService;
import com.gomcarter.frameworks.base.common.AssertUtils;
import com.gomcarter.frameworks.base.exception.CustomException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Optional;

/**
 * @author gomcarter
 */
@RestController
@RequestMapping("developer/user/setting")
public class DeveloperUserSettingController {

    @Resource
    private SettingOfUserService settingOfUserService;

    @PutMapping(value = "", name = "开启或者关闭第三方登录功能")
    void update(boolean remote, String url) {
        AssertUtils.isTrue(UserHolder.admin(), new CustomException("没有权限"));

        this.settingOfUserService.update(remote, url);
    }

    @GetMapping(value = "", name = "获取配置信息")
    SettingOfUserDto get() {
        return Optional.ofNullable(this.settingOfUserService.get())
                .map(s -> new SettingOfUserDto()
                        .setUrl(s.getUrl())
                        .setRemote(s.getRemote())
                )
                .orElse(new SettingOfUserDto());
    }
}
