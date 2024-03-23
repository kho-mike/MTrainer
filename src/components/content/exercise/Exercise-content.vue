<script setup>
import Button from "@/components/buttons/Button.vue";


let level = 'hight';
</script>

<template>
    <div class="exercise-content">
        <div class="exercise-content__task">2 x 2 = ?</div>
        <div class="exercise-content__answer">
            <div v-if="level === 'low'" class="answer--low-level">
                <Button class="btn--small" label="2"/>
                <Button class="btn--small" label="2"/>
                <Button class="btn--small" label="2"/>
                <Button class="btn--small" label="2"/>
            </div>
            <div v-if="level === 'hight'" class="answer--hight-level">
                <div class="answer--hight-level__input">
                    <input type="number" placeholder="..." autofocus />
                </div>
            </div>
        </div>
        <div class="exercise-content__btn">
            <Button class="btn--medium" label="Ответить" />
        </div>
    </div>
</template>

<style scoped>
.exercise-content {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    padding: 1rem;
    margin: 1rem;
}

.answer--hight-level input {
    width: 5rem;
    text-align: center;
}

.exercise-content__btn input {
    background-color: #51be69;
}


input:not([type=checkbox]) {

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
