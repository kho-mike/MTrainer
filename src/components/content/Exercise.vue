<template>
    <div class="exercise-header">
        <div class="exercise-header__left">
            <div class="exercise-title">
                <div class="exercise-title__name">Умножение на 2</div>
                <div class="exercise-title__description">описание</div>
            </div>
        </div>
        <div class="exercise-header__center">
            <div class="exercise-statistic">
                <div class="exercise-statistic__item">
                    <div class="exercise-statistic__title">Всего ответов:</div>
                    <div class="exercise-statistic__value">0</div>
                </div>
                <div class="exercise-statistic__item">
                    <div class="exercise-statistic__title">Верно:</div>
                    <div class="exercise-statistic__value">0</div>
                </div>
                <div class="exercise-statistic__item">
                    <div class="exercise-statistic__title">Ошибок:</div>
                    <div class="exercise-statistic__value">0</div>
                </div>
            </div>
        </div>
        <div class="exercise-header__right">
            <div class="exercise-timer">
                <div class="exercise-timer__title">Таймер:</div>
                <div class="exercise-timer__value">00:00:00</div>
            </div>
        </div>
    </div>
    <div class="exercise-content">
        <div class="exercise-content__task">2 x 2 = ?</div>
        <div class="exercise-content__answer">
            <div v-if="level === 'low'" class="answer--low-level">
                <Button class="btn--small" label="2" link="#" />
                <Button class="btn--small" label="2" link="#" />
                <Button class="btn--small" label="2" link="#" />
                <Button class="btn--small" label="2" link="#" />
            </div>
            <div v-if="level === 'hight'" class="answer--hight-level">
                <div class="answer--hight-level__input">
                    <input type="number" placeholder="..." autofocus />
                </div>
            </div>
        </div>
        <div class="exercise-content__btn">
            <Button class="btn--medium" label="Ответить" link="#" />
        </div>
    </div>
</template>

<script setup>
    import Button from "@/components/buttons/Button.vue";
    import { reactive, ref } from 'vue'

</script>

<style scoped>
.exercise {
    width: 100%;
    padding: 1rem;
    color: #696f79;
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
    display: flex;
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
    padding-top: 2rem;
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
    font-size: 4rem;
    font-weight: 500;
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
