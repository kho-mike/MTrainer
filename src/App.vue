<template>
    <div class="header">
        <div class="hader-start">
            <div class="siteBar">
                <div class="site-logo">
                    <h2>MTrainer</h2>
                </div>
                <RouterLink to="/"><Button
                    class="btn--medium btn-toMain"
                    label="To Main"
                /></RouterLink>
            </div>
        </div>
        <div v-if="userStore.user" class="header-center">
            <RouterLink to="/modes"><Button class="btn--medium" label="Режимы"/></RouterLink>
            <RouterLink to="/mode"><Button class="btn--medium" label="Режим"/></RouterLink>
            <RouterLink to="/new"><Button class="btn--medium" label="New"/></RouterLink>
        </div>
        <div class="header-end">
            <div v-if="userStore.user" class="userBar">
                <div class="userBar-btn header-item">
                    <div class="userBar-btn-avatar">
                        <div class="avatar-box">
                            <img
                                src="./assets/img/avatar.jpg"
                                height="50rem"
                                class="img-avatar--small"
                                alt="avatar"
                            />
                        </div>
                    </div>
                    <div class="userBar-btn-title btn--medium">{{userStore.user.name}}</div>
                </div>
                <div class="userBar-menu header-item">
                    <ButtonNav  @click="logout" class="btn-nav-back" label="Выход"/>
                    <RouterLink to="/settings"><Button class="btn--medium" label="Настройки"/></RouterLink>
                </div>
            </div>

            <div v-if="!userStore.user" class="userBar asdsa">
                <div class="guestBar-menu header-item">
                    <RouterLink to="/login"><Button class="btn--medium" label="Войти"/></RouterLink>
                </div>
            </div>

        </div>
    </div>

    <div class="content">
        <RouterView />
    </div>
</template>

<script setup>

import { RouterLink, RouterView } from "vue-router";
import { computed, reactive, ref, watch } from "vue";
import Button from "@/components/elements/Button.vue";
import ButtonNav from "@/components/elements/ButtonNav.vue";
import { useUserStore } from "@/stores";
const userStore = useUserStore();

function logout() {
    const userStore = useUserStore();
    userStore.logout();
}

</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    height: 2rem;
}

.header-item * {
    margin-left: 0.5rem;
}

.btn-toMain {
    display: none;
}

.siteBar:hover {
    .site-logo {
        display: none;
    }

    .btn-toMain {
        display: flex;
    }
}

.userBar-btn {
    display: flex;
    align-items: center;
}

.userBar-menu {
    display: none;
    align-items: center;
}

.siteBar:hover {
    .site-logo {
        display: none;
    }

    .btn-toMain {
        display: block;
    }
}

.userBar:hover {
    .userBar-btn {
        display: none;
    }

    .userBar-menu {
        display: flex;
    }
}

.img-avatar--small {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
}

@media (hover: none) {
    .siteBar:active {
        .site-logo {
            display: none;
        }

        .btn-toMain {
            display: block;
        }
    }

    .userBar:active {
        .userBar-btn {
            display: none;
        }

        .userBar-menu {
            display: flex;
        }
    }
}

@media screen and (max-width: 400px) {
    .userBar-btn-title {
        display: none;
    }
}

.content {
    background-color: #ffffff;
    border-radius: 3vh;
    min-height: 90vh;
    padding: 1rem;
}
</style>
