<template>
    <div class="exercise-header">
        
    </div>
    <div class="exercise-content">
        <h1>Test</h1>

    </div>
</template>

<script setup>

</script>

<style scoped>
.exercise {
    width: 100%;
    color: #696f79;
}

.msg-box {
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
}

.msg-green {
    color: var(--color--green);
}

.msg-red {
    color: var(--color--red);
}

@media screen and (min-width: 651px) {
    .exercise-header__right {
        text-align: end;
    }

    .exercise-header__left,
    .exercise-header__right {
        width: 33%;
    }
}

.exercise-header {
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 650px) {
    .exercise-header {
        display: flex;
        flex-direction: column;
    }

    .exercise-header__left {
        text-align: start;
    }

    .exercise-header__center {
        text-align: center;
    }

    .exercise-header__right {
        text-align: end;
    }
}

.exercise-title__name {
    font-size: 1.7rem;
    font-weight: 500;
}

.exercise-statistic__item {
    width: 150px;
    display: flex;
    justify-content: space-between;
}

.exercise-statistic__title,
.exercise-timer__title {
    margin-right: 1rem;
}

.exercise-timer {
    display: flex;
    justify-content: end;
}

.exercise-content {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 10px;
}

.exercise-content input,
.exercise-content .btn {
    border: 0;
}

.exercise-content__task,
.exercise-content__answer,
.exercise-content__btn {
    text-align: center;
    margin-bottom: 20px;
}

.exercise-content__task {
    display: flex;
    font-size: 4rem;
    font-weight: 500;
}

.task__item {
    padding: 0 15px;
}

.choose-item {
    border-radius: 35%;
    font-size: 1.5rem;
    color: #f5f5f5;
    background-color: #8692a6;
    margin: 1rem;
}

.choose-item--checked {
    background-color: #f89439;
}

.input-line {
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.5rem;
}

.answer--lhight-level {
    display: none;
}

.answer--low-level {
    display: flex;
    justify-content: center;
}

.answer--low-level > * {
    margin: 0 5px;
}

.answer--hight-level {
    margin: 0 5px;
}

.answer--hight-level input {
    width: 5rem;
    text-align: center;
}

.exercise-content__btn input {
    background-color: #51be69;
}

input:not([type="checkbox"]) {
    box-sizing: content-box;
    border: 0.1rem solid grey;
    border-radius: 2rem;
    padding: 1rem;
    font-family: "Ubuntu";
    font-weight: 500;
    font-size: 1rem;
    box-shadow: 0 0 1rem rgba(116, 116, 116, 0.3);
    cursor: pointer;
}

@media screen and (max-width: 650px) {
    .exercise-header {
        display: flex;
        justify-content: start;
        flex-direction: column;
    }

    .exercise-header__left,
    .exercise-header__center,
    .exercise-header__right {
        text-align: start;
    }

    .exercise-timer {
        display: flex;
        justify-content: start;
    }
}
</style>
