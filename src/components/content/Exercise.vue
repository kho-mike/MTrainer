<script setup>

</script>

<template>

        <div class="exercise">
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
                            <div class="exercise-statistic__title">
                                Всего ответов:
                            </div>
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
                    <div class="answer--low-level">
                        <span
                            class="choose-item btn"
                            onclick="checkAnswer(this)"
                            >23</span
                        >
                        <span
                            class="choose-item btn"
                            onclick="checkAnswer(this)"
                            >58</span
                        >
                        <span
                            class="choose-item btn"
                            onclick="checkAnswer(this)"
                            >75</span
                        >
                        <span
                            class="choose-item btn"
                            onclick="checkAnswer(this)"
                            >46</span
                        >
                    </div>
                    <div class="answer--hight-level">
                        <div class="answer--hight-level__input">
                            <input
                                type="number"
                                placeholder="Ответ"
                                autofocus
                            />
                        </div>
                    </div>
                </div>
                <div class="exercise-content__btn">
                    <input type="button" value="Ответить" />
                </div>
            </div>
        </div>

</template>

<style scoped>
    .content {
    background-color: #FFFFFF;
    border-radius: 3vh;
    min-height: 90vh;
    padding: 1rem;
}
</style>
