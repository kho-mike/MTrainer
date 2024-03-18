<script setup>

</script>

<template>
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
</template>

<style scoped>

</style>
