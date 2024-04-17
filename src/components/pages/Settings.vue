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
            <form action="" method="post">


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
                        <label for="name">Имя*:</label>
                        <Inp
                            v-model="name"
                            type="text"
                            name="name"
                            placeholder="Имя"
                        />
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-input-box">
                        <label for="pass">Пароль*</label><Button
                            type="button"
                            class="btn--medium"
                            id=""
                            label="Изменить"
                        />
                        <Inp v-model="pass" type="password" name="pass" placeholder="Пароль" />
                    </div>
                </div>

                <div v-if="needToChangePass" class="form-item">
                    <div class="form-input-box">
                        <label for="passRepeat">Повтор пароля*</label><Button
                            type="button"
                            class="btn--medium"
                            id=""
                            :label="labelBtnToChangePass"
                        />
                        <Inp v-model="passRepeat" type="password" name="passRepeat" placeholder="Повтор пароля" />
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

const login = ref("");
const name = ref("");
const pass = ref("");
const passRepeat = ref("");
const labelBtnToChangePass = ref("Изменить");
const needToChangePass = ref(false);

function toChangePass(){
    //
    needToChangePass = true;
    labelBtnToChangePass = ref("Оставить");
};
function dontChangePass(){
    //
    needToChangePass = false;
    labelBtnToChangePass = ref("Изменить");
};


</script>

<style scoped>

</style>
