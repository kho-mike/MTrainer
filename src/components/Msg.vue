<script setup>
defineProps({
    text: {
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

        <div class="msg" :class="class">{{ text }}</div>

</template>

<style scoped>

.msg {
    color: var(--color-text--dark);
    border-radius: 2rem;
    padding: 0.6rem 1rem;
    font-weight: 500;
    font-size: 1rem;
}

</style>
