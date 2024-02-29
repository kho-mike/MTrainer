<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
    <div class="header">
        <div class="hader-start">
            <div class="siteBar">
                <div class="site-logo header-item">
                    <h2>MTrainer</h2>
                </div>
                <div class="btn button-toMain header-item">
                    <a href="#">
                        <div class="btn">На главную</div>
                    </a>
                </div>
            </div>
        </div>
        <div class="header-end">
            <div class="userBar">
                <div class="userBar-btn header-item">
                    <div class="userBar-btn-avatar">
                        <div class="avatar-box">
                            <img
                                src="./src/assets/img/avatar.jpg"
                                height="3rem;"
                                class="img-avatar--small"
                                alt="avatar"
                            />
                        </div>
                    </div>
                    <div class="userBar-btn-title">Хозяинов Михаил</div>
                </div>
                <div class="userBar-menu header-item">
                    <a href="http://localhost:5500/temp-login.html">
                        <div class="button-nav button-nav-exit">Выйти</div>
                    </a>
                    <div class="btn">
                        <a href="#">
                            <div class="btn">Статистика</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
