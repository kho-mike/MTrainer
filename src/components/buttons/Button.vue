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
    <div class="btn" :class="class" :link="link">{{ label }}</div>
</template>

<style scoped>
.btn {
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
