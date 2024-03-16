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
    <div class="btn-nav" :class="class">{{ label }}</div>
</template>

<style scoped>
.btn-nav {
    color: var(--color-text--dark);

    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.btn-nav-back::before {
    content: url("../../assets/icons/back.png");
    margin-right: 5px;
}

.btn-nav-exit::before {
    content: url("./src/assets/icons/exit.png");
    margin-right: 5px;
}
</style>
