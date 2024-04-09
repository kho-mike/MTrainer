<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <button class="btn" :class="class" >{{ label }}</button>
</template>

<style scoped>
.btn {
    box-sizing: border-box;
    border: 0;
    margin: auto 5px;
    color: var(--color-text--ligth);
    background-color: var(--color-btn--grey);
    border-radius: 2rem;
    padding: 1rem;
    font-weight: 500;
    font-size: 1rem;
    box-shadow: 0 0 1rem rgba(116, 116, 116, 0.3);
    cursor: pointer;
    text-align: center;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;

}

.btn:hover {
    box-shadow: 0 0 1.2rem rgba(116, 116, 116, 0.5);
}

.btn:disabled {
    background-color: var(--color-btn--disabled);
    cursor: no-drop;
}

.btn--micro {
    width: 50px;
}

.btn--small {
    width: 90px;
}

.btn--medium {
    width: 120px;
}

.btn--big {
    width: 200px;
}

</style>
