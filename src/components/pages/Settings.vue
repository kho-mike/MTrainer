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
                            @click="toChangePass"
                            :label="labelBtnToChangePass"
                        />
                        <Inp v-model="pass" type="password" name="pass" placeholder="Пароль" />
                    </div>
                </div>

                <div v-if="needToChangePass" class="form-item">
                    <div class="form-input-box">
                        <label for="passRepeat">Повтор пароля*</label>
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
import Inp          from "@/components/elements/Input.vue";
import { useConstsStore } from "@/stores";
import { reactive, ref } from "vue";

const consts = useConstsStore();

const login = ref("");
const name = ref("");
const pass = ref("");
const passRepeat = ref("");
const labelBtnToChangePass = ref("Изменить");
const needToChangePass = ref(false);

function toChangePass(){
    //
    if (needToChangePass) {
        console.log("needToChangePass = ref(false);");
        needToChangePass = true;
        labelBtnToChangePass = ref("Оставить");
    } else {
        console.log("needToChangePass != ref(false);");
        needToChangePass = false;
        labelBtnToChangePass = ref("Изменить");
    }
   
};


</script>

<style scoped>

</style>
