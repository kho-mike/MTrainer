<script setup>
import Button from "./buttons/Button.vue";
</script>

<template>
    <div class="header">
        <div class="hader-start">
            <div class="siteBar">
                <div class="site-logo">
                    <h2>MTrainer</h2>
                </div>
                <Button
                    class="btn--small btn-toMain"
                    label="To Main"
                />
            </div>
        </div>
        <div class="header-end">
            <div class="userBar">
                <div class="userBar-btn header-item">
                    <div class="userBar-btn-avatar">
                        <div class="avatar-box">
                            <img
                                src="../assets/img/avatar.jpg"
                                height="50rem"
                                class="img-avatar--small"
                                alt="avatar"
                            />
                        </div>
                    </div>
                    <div class="userBar-btn-title">Хозяинов Михаил</div>
                </div>
                <div class="userBar-menu header-item">
                    <Button>Вёрстка</Button>
                    <Button>Статистика</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    height: 2rem;
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
</style>
