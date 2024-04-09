<template>
    <div class="login">
        <form action="./temp-profile.html" method="post">

            <div class="form-item">
                <div class="form-header">
                    <h2>Математический ренажер</h2>
                    <p>авторизуйтесь или зарегистрируйтесь</p>
                </div>
            </div>

            <div class="form-item">
                <div class="form-input-box">
                    <label for="login">Логин*</label>
                    <input type="text" name="login" placeholder="Логин">
                </div>
            </div>
            <div class="form-item">
                <div class="form-input-box">
                    <label for="password">Пароль*</label>
                    <input type="password" name="password" placeholder="Пароль">
                </div>
            </div>

            <div class="form-item">
                <div class="form-checkbox">
                    <input type="checkbox" class="inpit-checkbox" name="remember" id="remember">
                    <label for="remember">Запомнить меня</label>
                </div>
            </div>

            <div class="form-item">
                <div class="form-button">
                    <input type="submit" name="login" value="Войти">
                </div>
            </div>

            <div class="form-item">
                <div class="form-separator">
                    <span class="hr"><hr></span>
                    <span>или</span>
                    <span class="hr"><hr></span>
                </div>
            </div>



            <div class="form-item">
                <div class="form-button">
                    <a href="http://localhost:5500/temp-register.html">
                        <input type="button" name="register" value="Зарегистрироваться">
                    </a>
                    
                </div>
            </div>
           
        </form>
    </div>
    
</template>

<script setup>
import Button from "@/components/buttons/Button.vue";
import ButtonNav from "@/components/buttons/ButtonNav.vue";
import Msg from "@/components/Msg.vue";
import { reactive, ref } from "vue";

</script>

<style scoped>
    .login {

        min-height: 80vh;
        display: flex;
        align-items: center;
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
    
    
    
    .form-button {
    
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
