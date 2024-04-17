<template>
    <div class="settings">
        <div class=settings-header>
            <div class=settings-header__label>
                Пользователь
            </div>
            <div class=settings-header__desription>
                описание раздела
            </div>
        </div>
        <div class=settings-content>
            <form action=`${SITE_URL}login` method="post" @submit.prevent="onSubmit">


                <div class="form-item">
                    <div class="form-input-box">
                        <label for="login">Логин*:</label>
                        <Inp
                            v-model="login"
                            type="text"
                            name="login"
                            placeholder="Логин"
                        />
                    </div>
                </div>
                <div class="form-item">
                    <div class="form-input-box">
                        <label for="pass">Пароль*</label>
                        <Inp v-model="pass" type="password" name="pass" placeholder="Пароль" />
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-checkbox">
                        <input
                            v-model="remember"
                            type="checkbox"
                            class="inpit-checkbox"
                            name="remember"
                            id="remember"
                        />
                        <label for="remember">Запомнить меня</label>
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-button">
                        <Button
                            type="submit"
                            class="btn--big"
                            id=""
                            label="Сохранить"
                        />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

console.log('This is Exercise page!');

import Button       from "@/components/elements/Button.vue";
import ButtonNav    from "@/components/elements/ButtonNav.vue";
import Msg          from "@/components/elements/Msg.vue";
import { SITE_URL } from "@/config";
import { reactive, ref } from "vue";

</script>

<style scoped>

</style>
