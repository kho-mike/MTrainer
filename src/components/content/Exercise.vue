<template>
    <div class="exercise-header">
        <div class="exercise-header__left">
            <div class="exercise-title">
                <div class="exercise-title__name">Умножение</div>
                <div class="exercise-title__description">
                    тренировка таблицы умножения
                </div>
            </div>
        </div>
        <div class="exercise-header__center">
            <div class="exercise-statistic">
                <div class="exercise-statistic__item">
                    <div class="exercise-statistic__title">Всего ответов:</div>
                    <div class="exercise-statistic__value">{{ stat.all }}</div>
                </div>
                <div class="exercise-statistic__item">
                    <div class="exercise-statistic__title">Верно:</div>
                    <div
                        class="exercise-statistic__value"
                        :style="stat.right ? 'color:var(--color--green)' : ''"
                    >
                        {{ stat.right }}
                    </div>
                </div>
                <div class="exercise-statistic__item">
                    <div class="exercise-statistic__title">Ошибок:</div>
                    <div
                        class="exercise-statistic__value"
                        :style="stat.wrong ? 'color:var(--color--red)' : ''"
                    >
                        {{ stat.wrong }}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="false" class="exercise-header__right">
            <div class="exercise-timer">
                <div class="exercise-timer__title">Таймер:</div>
                <div class="exercise-timer__value">00:00:00</div>
            </div>
        </div>
    </div>
    <div class="exercise-content">
        <div class="msg-box">
            <Msg v-for="msg in messages" :class="msg.color" :text="msg.text" />
        </div>
        <div class="exercise-content__task">
            <span class="task__item">{{ currentTask.firstOperand }}</span>
            <span class="task__item">x</span>
            <span class="task__item">{{ currentTask.secondOperand }}</span>
            <span class="task__item">=</span>
            <span class="task__item">{{ currentTask.result }}</span>
        </div>
        <div class="exercise-content__answer">
            <div v-if="currentTask.level === 'low'" class="answer--low-level">
                <Button
                    v-for="variant in currentTask.variants"
                    @click="(event) => chooseAnswer(event)"
                    class="btn--small"
                    :style="
                        currentTask.result == variant
                            ? 'background-color:var(--color--orange)'
                            : ''
                    "
                    :id="variant"
                    :label="String(variant)"
                />
            </div>
            <div
                v-if="currentTask.level === 'hight'"
                class="answer--hight-level"
            >
                <div class="answer--hight-level__input">
                    <div class="input-line">
                        <Button
                            @click="(event) => enterAnswer(event)"
                            class="btn--micro"
                            id="7"
                            label="7"
                        />
                        <Button
                            @click="(event) => enterAnswer(event)"
                            class="btn--micro"
                            id="8"
                            label="8"
                        />
                        <Button
                            @click="(event) => enterAnswer(event)"
                            class="btn--micro"
                            id="9"
                            label="9"
                        />
                    </div>
                    <div class="input-line">
                        <Button
                            @click="(event) => enterAnswer(event)"
                            class="btn--micro"
                            id="4"
                            label="4"
                        />
                        <Button
                            @click="(event) => enterAnswer(event)"
                            class="btn--micro"
                            id="5"
                            label="5"
                        />
                        <Button
                            @click="(event) => enterAnswer(event)"
                            class="btn--micro"
                            id="6"
                            label="6"
                        />
                    </div>
                    <div class="input-line">
                        <Button
                            @click="(event) => enterAnswer(event)"
                            class="btn--micro"
                            id="1"
                            label="1"
                        />
                        <Button
                            @click="(event) => enterAnswer(event)"
                            class="btn--micro"
                            id="2"
                            label="2"
                        />
                        <Button
                            @click="(event) => enterAnswer(event)"
                            class="btn--micro"
                            id="3"
                            label="3"
                        />
                    </div>
                    <div class="input-line">
                        <ButtonNav
                            @click="(event) => enterAnswer(event)"
                            class=""
                            id="<"
                            label="<"
                        />
                        <Button
                            @click="(event) => enterAnswer(event)"
                            class="btn--micro"
                            id="0"
                            label="0"
                        />
                        <ButtonNav
                            @click="(event) => enterAnswer(event)"
                            class="btn--micro"
                            id="X"
                            label="X"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="exercise-content__btn">
            <Button
                :disabled="currentTask.result === '?'"
                @click="checkAnswer"
                class="btn--medium"
                label="Ответить"
                link="#"
            />
        </div>
    </div>
</template>

<script setup>
import Button from "@/components/buttons/Button.vue";
import ButtonNav from "@/components/buttons/ButtonNav.vue";
import Msg from "@/components/Msg.vue";
import { Answers, Exercises, Operators } from "@/MTrainer";
import { reactive, ref } from "vue";

const currentTask = reactive({
    firstOperand: 2,
    operator: Operators.multiplication.icon,
    secondOperand: 2,
    result: "?",
    level: "hight",
    variants: [3, 7, 5, 6],
});

const messages = reactive({});

const stat = reactive({
    all: 0,
    right: 0,
    wrong: 0,
});

function generateTask() {
    currentTask.firstOperand = Math.round(Math.random() * (9 - 2) + 2);
    currentTask.secondOperand = Math.round(Math.random() * (9 - 2) + 2);
    currentTask.result = "?";
    let arr = [];
    arr.push(
        Answers.multiplication[currentTask.firstOperand][
            currentTask.secondOperand
        ] - 1
    );
    arr.push(
        Answers.multiplication[currentTask.firstOperand][
            currentTask.secondOperand
        ]
    );
    arr.push(
        Answers.multiplication[currentTask.firstOperand][
            currentTask.secondOperand
        ] + 1
    );
    currentTask.variants = arr
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

function chooseAnswer(event) {
    currentTask.result = Number(event.target.id);
}

function enterAnswer(event) {
    if (event.target.id === "<") {
        currentTask.result = Number(String(currentTask.result).slice(0, -1));
        return;
    }
    if (event.target.id === "X") {
        currentTask.result = "?";
        return;
    }
    if (currentTask.result === "?") {
        currentTask.result = Number(event.target.id);
        return;
    }

    if( String(currentTask.result).length === 2){
        return;
    }

    currentTask.result = Number(
        String(currentTask.result) + String(event.target.id)
    );
    return;
}

function checkAnswer() {
    stat.all++;
    if (
        currentTask.result ===
        Answers.multiplication[currentTask.firstOperand][
            currentTask.secondOperand
        ]
    ) {
        /*
        [
            'Верно!',
            'Правильно!',
            'Молодец!',
            'Это верный ответ!',
            'Так держать!',
            'Умница!',
            'Отлично!',
        ][]
        */
        stat.right++;
        showMsg("Верно!!!", "msg-green");
        generateTask();
    } else {
        stat.wrong++;
        showMsg("Ошибочка...", "msg-red");
        currentTask.result = "?";
    }
}

function showMsg(text, color) {
    let id = Number(new Date());
    messages[id] = {};
    messages[id]['text'] = text;
    messages[id]['color'] = color;

    console.log(messages);
    console.log(messages[id]);
    console.log(messages[color]);

    setTimeout(hideMsg, 2000, id);
}

function hideMsg(id) {
    delete messages[id];
}

generateTask();
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
