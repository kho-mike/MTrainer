<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    link: {
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
    <button class="btn-test" type="button">{{ label }}</button>
</template>

<style scoped>

.btn-test {
    color: var(--color-text--ligth);
    background-color: var(--color-btn--grey);
    border-radius: 2rem;
    padding: 1rem;
    font-weight: 500;
    font-size: 1rem;
    box-sizing: border-box;
    box-shadow: 0 0 1rem rgba(116, 116, 116, 0.3);
    cursor: pointer;
    text-align: center;

    overflow: hidden;
    text-overflow: ellipsis;

    user-select: none;
}



.btn-test:hover {
    box-shadow: 0 0 1.2rem rgba(116, 116, 116, 0.5);
}

.btn--small {
    width: 30px;
}

.btn--medium {
    min-width: 5rem;
    max-width: 8rem;
}

.btn--big {
    min-width: 250px;
}

</style>
