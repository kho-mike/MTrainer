<template>
    <div class="login">
        <form action="" method="post" @submit.prevent="(event)=>{prepairSubmit(event)}">

            <div class="form-item">
                <div class="form-header">
                    <h2>Математический ренажер</h2>
                    <p>авторизуйтесь или зарегистрируйтесь</p>
                </div>
            </div>

            <div class="form-item">
                <div class="form-input-box">
                    <label for="login">Логин*</label>
                    <Inp v-model="formLogin" type="text" name="login" placeholder="Логин" />
                </div>
            </div>
            <div class="form-item">
                <div class="form-input-box">
                    <label for="pass">Пароль*</label>
                    <Inp type="password" name="pass" placeholder="Пароль" />
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
                    <Button
                            type="submit"
                            class="btn--max"
                            id=""
                            label="Войти"
                    />
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
                    <RouterLink to="/reg">
                        <Button
                            type="button"
                            class="btn--max"
                            id=""
                            label="Зарегистрироваться"
                        />
                    </RouterLink>                    
                </div>
            </div>

            <div class="form-item">
                <div class="form-separator">
                    <span class="hr"><hr></span>
                </div>
            </div>



            <div class="form-item">
                <div class="form-button">
                    <RouterLink to="/home">
                        <ButtonNav class="btn-nav-back" label="Назад" link="#" />
                    </RouterLink>                    
                </div>
            </div>

           
        </form>
    </div>
    
</template>

<script setup>

console.log('This is Login page!');

import Button      from "@/components/elements/Button.vue";
import ButtonNav   from "@/components/elements/ButtonNav.vue";
import Inp       from "@/components/elements/Input.vue";
import Msg         from "@/components/elements/Msg.vue";
import { reactive, ref } from "vue";


function prepairSubmit(event){
    console.log(formLogin);
}

// let user = {
//   login: 'John',
//   pass: 'Smith'
// };

// function onSubmit(event) {
//     fetch('https://mtrainer.khomike.ru/login', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(user))
//   .then(response => response.json())
//   .then(result => console.log( result ); /* обрабатываем результат */);

// }

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
