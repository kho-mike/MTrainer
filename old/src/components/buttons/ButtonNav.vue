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
    <button class="btn-nav" :class="class" :link="link">{{ label }}</button>
</template>

<style scoped>
.btn-nav {
    color: var(--color-text--dark);
    background-color: var(--color-bg---dark);

    box-sizing: border-box;
    border: none;
    margin: auto 5px;
    padding: auto 1rem;
    font-weight: 500;
    font-size: 1rem;
    text-shadow: 0 0 1rem rgba(116, 116, 116, 0.3);

    cursor: pointer;
    display: flex;
    text-align: center;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
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
