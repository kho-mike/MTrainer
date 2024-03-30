<template>
    <div class="exercise-header">
        <div class="exercise-header__left">
            <div class="exercise-title">
                <div class="exercise-title__name">Умножение</div>
                <div class="exercise-title__description">тренировка таблицы умножения</div>
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
                    <div class="exercise-statistic__value">{{ stat.right }}</div>
                </div>
                <div class="exercise-statistic__item">
                    <div class="exercise-statistic__title">Ошибок:</div>
                    <div class="exercise-statistic__value">{{ stat.wrong }}</div>
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
                    @click="(event)=>chooseAnswer(event)" 
                    class="btn--small" 
                    :id="variant" 
                    :label="String(variant)"
                />
            </div>
            <div v-if="currentTask.level === 'hight'" class="answer--hight-level">
                <div class="answer--hight-level__input">
                    <input type="number" placeholder="..." autofocus />
                </div>
            </div>
        </div>
        <div class="exercise-content__btn">
            <Button :disabled="currentTask.result==='?'" @click="checkAnswer" class="btn--medium" label="Ответить" link="#" />
        </div>
        <div  class="msg-box">
            <Msg v-for="msg in messages" class="" :text="msg"/>

        </div>
    </div>
</template>

<script setup>
    import Button from "@/components/buttons/Button.vue";
    import Msg from "@/components/Msg.vue";
    import { Answers, Exercises, Operators } from "@/MTrainer";
    import { reactive, ref } from 'vue'
        
    const currentTask = reactive(
        {
            firstOperand: 2,
            operator: Operators.multiplication.icon,
            secondOperand: 2,
            result: '?',
            level: 'low',
            variants: [
                3, 7, 5, 6
            ],
        }
    )

    const messages = reactive({});

    const stat = reactive ({
        all: 0,
        right: 0,
        wrong: 0
    })

    function generateTask() {
        currentTask.firstOperand = Math.round(Math.random() * (9 - 2) + 2);
        currentTask.secondOperand = Math.round(Math.random() * (9 - 2) + 2);
        currentTask.result = '?';
        let arr = [];
        arr.push(Answers.multiplication[currentTask.firstOperand][currentTask.secondOperand]-1);
        arr.push(Answers.multiplication[currentTask.firstOperand][currentTask.secondOperand]);
        arr.push(Answers.multiplication[currentTask.firstOperand][currentTask.secondOperand]+1);
        currentTask.variants = arr.map(value => ({ value, sort: Math.random() }))
                                    .sort((a, b) => a.sort - b.sort)
                                    .map(({ value }) => value)
    }

    function chooseAnswer(event){
        currentTask.result=Number(event.target.id);
    }

    function checkAnswer(){
        stat.all++;
        if(
            currentTask.result === Answers.multiplication[currentTask.firstOperand][currentTask.secondOperand]
        ){
            stat.right++;
            showMsg('Верно!!!');
            generateTask();
        } else {
            stat.wrong++;
            showMsg('Ошибочка...');
            currentTask.result = '?';
        }
    }

    function showMsg(text) {
        let id = Number(new Date());
        messages[id] = text;

        setTimeout(hideMsg, 3000, id);
        console.log(messages);
    }

    function hideMsg(id) {
        delete messages[id];
    }

    generateTask();

</script>

<style scoped>
.exercise {
    width: 100%;
    padding: 1rem;
    color: #696f79;
}

.msg-box {
    display: flex;
    flex-direction: column;

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
    padding-top: 10vh;
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
