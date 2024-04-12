<template>
    <input v-model="model" class="inp">
</template>

<script setup>
    const model = defineModel()
</script>

<style scoped>
.inp {
    box-sizing: border-box;
    border: 0;
    margin: auto 5px;
    color: var(--color-text--dark);
    background-color: var(--color-btn--white);
    border-radius: 2rem;
    padding: 1rem;
    font-weight: 500;
    font-size: 1rem;
    box-shadow: 0 0 1rem rgba(116, 116, 116, 0.3);
    text-align: start;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;

}

.inp:hover {
    box-shadow: 0 0 1.2rem rgba(116, 116, 116, 0.5);
}

.inp:disabled {
    background-color: var(--color-btn--disabled);
    cursor: no-drop;
}

.inp--micro {
    width: 50px;
}

.inp--small {
    width: 90px;
}

.inp--medium {
    width: 120px;
}

.inp--big {
    width: 200px;
}

.inp--max {
    width: 100%;
}

</style>
