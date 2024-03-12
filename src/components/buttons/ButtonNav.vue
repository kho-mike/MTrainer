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
    color: var(--color-text--ligth);

    border-radius: 2rem;
    padding: 1rem;
    font-weight: 500;
    font-size: 1rem;

    cursor: pointer;
    text-align: center;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;




    padding: 0 1rem;
    color: #8692A6;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    cursor: pointer;
}

.btn-nav-back::before {
    content:url('./src/assets/icons/back.png');
    margin-right: 5px;
}

.btn-nav-exit::before {
    content:url('./src/assets/icons/exit.png');
    margin-right: 5px;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
