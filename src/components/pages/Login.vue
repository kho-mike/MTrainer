<template>
    <div class="login">
        <form action="https://mtrainer.khomike.ru/login" method="post" @submit="onSubmit">
            <div class="form-item">
                <div class="form-header">
                    <h2>Математический ренажер</h2>
                    <p>авторизуйтесь или зарегистрируйтесь</p>
                </div>
            </div>

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
                        class="btn--max"
                        id=""
                        label="Войти"
                    />
                </div>
            </div>
            <div class="form-item" style="text-align: center;">
                <RouterLink to="/reg"></RouterLink>
                <div class="form-button">
                    если нет аккаунта - <RouterLink to="/reg">зарегистрироваться</RouterLink>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import Button from "@/components/elements/Button.vue";
import ButtonNav from "@/components/elements/ButtonNav.vue";
import Inp from "@/components/elements/Input.vue";
import Msg from "@/components/elements/Msg.vue";
import { reactive, ref } from "vue";

import { useAuthStore } from "@/stores";
const authStore = useAuthStore();

const login = ref("");
const pass = ref("");
const remember = ref(false);

function onSubmit(form) {
    //localStorage.getItem('userToken', authStore.login(login.value, pass.value)); 
}   
</script>

<style scoped>
.login {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

/************** form ***************/

label {
    color: #8692a6;
}

form input:not([type="checkbox"]) {
    width: 20rem;
}

.form-item {
    margin: 0.5rem;
}

.form-header {
    margin-bottom: 1rem;
}

.form-header p {
    color: #8692a6;
}

.form-header * {
    margin: 0;
    padding: 0;
}

.form-input-box {
    display: flex;
    flex-direction: column;
}

.form-checkbox {
    display: flex;
}

.form-submit {
    margin-top: 2rem;
}

.form-separator {
    color: #8692a6;
    display: flex;
    justify-content: space-between;
}

.form-separator .hr {
    flex-grow: 1;
    padding: 0 5px;
}
</style>
