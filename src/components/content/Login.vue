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

</script>

<style scoped>
    .login {

        min-height: 80vh;
        display: flex;
        align-items: center;
    }

</style>
