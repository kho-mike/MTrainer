<script setup>


</script>

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
</template>

<style scoped>

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

</style>
