<template>
    <div class="profile">
                <div class="profile-header">
                    <div class="profile-header-avatar">
                        <img src="@/assets/img/avatar.jpg" height="150rem" class="img-avatar--medium" alt="avatar">
                    </div>
                    <div class="profile-header-info">
                        <div class="info-title">ХОЗЯИНОВ МИХАИЛ</div>
                        <div class="info-description">25 уровень</div>
                        <div class="info-separator"><hr></div>
                        <div class="info-statistic">
                            <div class="info-statistic-item">
                                <div class="info-statistic-icon">
                                    <img src="@/assets/icons/flag.png" width="25rem" alt="medal">
                                </div>
                                <div class="info-statistic-box">
                                    <div class="statistic-box__value">27</div>
                                    <div class="statistic-box__title">уроков пройдено</div>
                                </div>
                            </div>
                            <div class="info-statistic-item">
                                <div class="info-statistic-icon">
                                    <img src="@/assets/icons/time.png" width="25rem" alt="medal">
                                </div>
                                <div class="info-statistic-box">
                                    <div class="statistic-box__value">35 мин</div>
                                    <div class="statistic-box__title">время занятий</div>
                                </div>
                            </div>
                            <div class="info-statistic-item">
                                <div class="info-statistic-icon">
                                    <img src="@/assets/icons/done.png" width="25rem" alt="medal">
                                </div>
                                <div class="info-statistic-box">
                                    <div class="statistic-box__value">135</div>
                                    <div class="statistic-box__title">верных ответов</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile-content">
                    <div class="list-awards-box">
                        <div class="list-awards-title">AWARDS</div>
                        <ul class="list-awards">
                            <li class="list-awards__item">
                                <div class="list-awards__icon">
                                    <img src="@/assets/icons/award1.png" height="100rem" alt="Award1">
                                </div>
                                <div class="list-awards__title">AWARD 1</div>
                            </li>
                            <li class="list-awards__item">
                                <div class="list-awards__icon">
                                    <img src="@/assets/icons/award2.png" height="100rem" alt="Award2">
                                </div>
                                <div class="list-awards__title">AWARD 2</div>
                            </li>
                        </ul>
                    </div>
                    <div class="list-categories-box">
                        <ul class="list-categories">
                            <li class="list-categories__item">
                                <div class="list-categories__rank">RANK</div>
                                <div class="list-categories__icon">ICON</div>
                                <div class="list-categories__title">TITLE</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

</template>


<script setup>

</script>


<style scoped>

/***************************** Main *************************/




@font-face {
    font-weight: 300;
    font-family: 'Ubuntu';
    src: url("./src/assets/fonts/Ubuntu-Light.ttf");
}

@font-face {
    font-weight: 500;
    font-family: 'Ubuntu';
    src: url("./src/assets/fonts/Ubuntu-Medium.ttf");
}

@font-face {
    font-weight: 700;
    font-family: 'Ubuntu';
    src: url("./src/assets/fonts/Ubuntu-Bold.ttf");
}

body {
    background-color: #F5F5F5;
}


.wrapper {

    min-height: 90vh;
    margin: 0 10vw;
    font-family: 'Ubuntu';
    font-weight: 500;
    border-radius: 5vh;

}

a {
    text-decoration: none;
}

.btn, input:not([type=checkbox]) {

    box-sizing: content-box;
    border: 0.1rem solid grey;
    border-radius: 2rem;
    padding: 1rem;
    font-family: 'Ubuntu';
    font-weight: 500;
    font-size: 1rem;
    box-shadow: 0 0 1rem rgba(116, 116, 116, 0.3);
    cursor: pointer;
}

.btn:hover {
    box-shadow: 0 0 1rem rgba(116, 116, 116, 0.5);
}

input[type=text] {
    color: #8692A6;
}

input[type=password] {
    color: #8692A6;
}

input[type=submit] {
    background-color: #8692A6;
    color: #FFFFFF;
}

input[type=button] {
    background-color: #FFFFFF;
}

input[type=submit]:hover {
    cursor: pointer;
}

input[type=button]:hover {
    cursor: pointer;
}

input[type=submit]:active {
    box-shadow:none;
}



.button-nav {
    padding: 0 1rem;
    color: #8692A6;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    cursor: pointer;
}

.button-nav-back::before {
    content:url('./src/assets/icons/back.png');
    margin-right: 5px;
}

.button-nav-exit::before {
    content:url('./src/assets/icons/exit.png');
    margin-right: 5px;
}


/************************************************************************/


/****************************** HEADER ***********************************/

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
}

.header input[type=button] {
    background-color: #8692A6;
}

.siteBar:hover {

    .site-logo {
        display: none;
    }

    .button-toMain {
        display: flex;
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

.userBar-btn-avatar {
    margin: 0 1rem;
}

.avatar-box {

}

.userBar-btn {
    min-width: 10rem;
    box-sizing: content-box;
    color: #696F79;
    border-radius: 2rem;
    padding: 1rem;
    font-family: 'Ubuntu';
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    justify-content: end;
    align-items: center;
    cursor: pointer;
}

.site-logo {
    color: #696F79;
}

.button-toMain {
    display: none;
}

.userBar-menu {
    display: none;
    justify-content: space-between;
    align-items: center;
    min-width: 10rem;
    box-sizing: content-box;
}









/************************************************************************/



/**************************** CONTENT ***********************************/

.content {
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 3vh;

}

.content-other {
    min-height: 80vh;
    width: 100%;
    margin: 1rem;
    color: #696F79;
}

.content-other__header {

}

.other-title {
    font-size: 1.5rem;
    font-weight: 500;
}

.other-description {
    font-size: 1rem;
    font-weight: 500;
}



/* List categories */

.list-categories-box {

}

.list-cateegories {
    text-align: center;
}

.list-categories-box ul {
    padding-inline-start: 0;
}

ul.list-categories {
    display: flex;
    flex-wrap: wrap;
}

.list-categories-box li {
    list-style-type: none;
    color: #F5F5F5;
    width: 33%;
}

.list-categories-box a {
    color: #F5F5F5;
}

.list-categories__rank {
    position: relative;
    top: 15%;
    left: 5%;
}

.list-categories__title {
    position: relative;
    bottom: 15%;
    left: 5%;
}





/***********************************************************************/

/***************************** LOGIN ***********************************/
.login {

    min-height: 80vh;
    display: flex;
    align-items: center;
}
/************************************************************************/

/******************************* PROFILE ********************************/

.profile {
    min-height: 80vh;
    width: 100%;
    margin: 1rem;
    color: #696F79;
}


/*profile-header*/
.profile-header {
    display: flex;
    margin-bottom: 3rem;
}


.img-avatar--medium {
    border-radius: 20%;
}

.profile-header-info {
    margin-left: 1rem;
    width: 100%;
}

.info-title {
    font-size: 1.5rem;
    font-weight: 500;
}

.info-description {
    font-size: 1rem;
    font-weight: 500;
}

.info-statistic {
    display: flex;
}

.info-separator {
    height: 1.5rem;
}

.info-statistic-item {
    display: flex;
    width: 10rem;
    margin-left: 1rem;
}

.info-statistic-icon {
    border-radius: 20%;
    background-color: #FFFFFF;
    padding: 0.3rem;
    margin-right: 0.5rem;
    box-shadow: 0 0 1rem rgba(116, 116, 116, 0.3);
}

.statistic-box__value {
    font-size: 1.3rem;
    font-weight: 500;
}

.statistic-box__title {
    font-size: 0.7rem;
    font-weight: 500;
}

/* Profile-content */

.profile-content {
    display: flex;
}

.list-awards-box {
    width: 10rem;
    border-radius: 10%;
    background-color: #FFFFFF;
    box-shadow: 0 0 1rem rgba(116, 116, 116, 0.3);

}

.list-awards-title {
    text-align: center;
}

/* List awards */

.list-awards {
    text-align: center;
}

.profile-content ul {
    padding-inline-start: 0;
}

.profile-content li {
    list-style-type: none;
}

/* List categories */



/************************************************************************/






/**************************** EXERCISE **********************************/

.exercise {
    width: 100%;
    padding: 1rem;
    color: #696F79;
}

@media screen and (min-width: 651px) {
    .exercise-header__right {
        text-align: end;
    }

    .exercise-header__left, .exercise-header__right {
        width: 33%;
    }
}

.exercise-header {
    display: flex;
    justify-content: space-between;
}




.exercise-title__name {
    font-size: 1.7rem;
    font-weight: 500;
}


.exercise-statistic {
    font-size: 0.8rem;
}

.exercise-statistic__item {
    display: flex;

}

.exercise-statistic__title, .exercise-timer__title {
    margin-right: 1rem;
}

.exercise-timer {
    display: flex;
    justify-content: end;
}



/* exercise-title
exercise-title__name
exercise-title__description
exercise-header__center
exercise-statistic
exercise-statistic__item
exercise-statistic__title
exercise-statistic__value
exercise-statistic__item
exercise-statistic__title
exercise-statistic__value
exercise-statistic__item
exercise-statistic__title
exercise-statistic__value
exercise-header__right
exercise-timer
exercise-timer__title
exercise-timer__value */


.exercise-content {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.exercise-content input, .exercise-content .btn {
    border: 0;
}

.exercise-content__task, .exercise-content__answer, .exercise-content__btn {
    text-align: center;
}

.exercise-content__task {
    font-size: 4rem;
    font-weight: 500;
}

.choose-item {
    border-radius: 35%;
    font-size: 1.5rem;
    color: #F5F5F5;
    background-color: #8692A6;
    margin: 1rem;
}

.choose-item--checked {
    background-color: #F89439;
}



.answer--lhight-level {
    display: none;
}

.answer--low-level, .answer--hight-level {
    padding: 1rem;
    margin: 1rem;
}

.answer--hight-level input {
    width: 5rem;
    text-align: center;
}


.exercise-content__btn input {
    background-color: #51BE69;
}

@media screen and (max-width: 650px) {
    .exercise-header {
        display: flex;
        justify-content: start;
        flex-direction: column;
    }

    .exercise-header__left, .exercise-header__center, .exercise-header__right {

        text-align: start;
    }

    .exercise-timer {
        display: flex;
        justify-content: start;
    }
}


/************************************************************************/


 

/**************************** FORM **************************************/



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


/************************************************************************/

</style>