<template>
    <div class="login">
        <form action="" method="post" @submit.prevent="onSubmit">

            <div class="form-item">
                <div class="form-header">
                    <h2>Математический ренажер</h2>
                    <p>регистрация нового аккаунта</p>
                </div>
            </div>

            <div class="form-item">
                <div class="form-input-box">
                    <label for="login">Логин*</label>
                    <Inp v-model="login" type="text" name="login" placeholder="Логин" />
                </div>
            </div>
            <div class="form-item">
                <div class="form-input-box">
                    <label for="pass">Пароль*</label>
                    <Inp v-model="pass" type="password" name="pass" placeholder="Пароль" />
                </div>
            </div>
            <div class="form-item">
                <div class="form-input-box">
                    <label for="passRepeat">Повтор пароля*</label>
                    <Inp v-model="passRepeat" type="password" name="passRepeat" placeholder="Повтор пароля" />
                </div>
            </div>

            <div class="form-item">
                <div class="form-button">
                    <a href="#">
                        <Button
                            :disabled="isPassMatch"
                            type="submit"
                            class="btn--max"
                            id=""
                            label="Зарегистрироваться"
                        />
                    </a>
                    
                </div>
            </div>

            <div class="form-item" style="text-align: center;">
                <div class="form-button">
                    если уже есть аккаунт - <RouterLink to="/login">войти</RouterLink>
                    
                </div>
            </div>
           
        </form>
    </div>
    
</template>

<script setup>

import Button      from "@/components/elements/Button.vue";
import ButtonNav   from "@/components/elements/ButtonNav.vue";
import Inp       from "@/components/elements/Input.vue";
import Msg         from "@/components/elements/Msg.vue";
import { reactive, ref, computed } from "vue";

import { useUserStore } from "@/stores";
const userStore = useUserStore();

const login = ref("");
const pass = ref("");
const passRepeat = ref("");

const isPassMatch = computed(() => !login.value || !pass.value || pass.value !== passRepeat.value);

function onSubmit(form) {
    const result = userStore.reg(login.value, pass.value);
    console.log('result:');
    console.log(result); 
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
        color: #8692A6;
    }
    
    form input:not([type=checkbox]) {
        width: 20rem;
    }
    
    .form-item {
        margin: 0.5rem;
    }
    
    .form-header {
        margin-bottom: 1rem;
    }
    
    .form-header p {
        color: #8692A6;
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
        color: #8692A6;
        display: flex;
        justify-content: space-between;
    }
    
    .form-separator .hr {
        flex-grow: 1;
        padding: 0 5px;
    }

</style>
