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
});
</script>

<template>
    <a href="#">
        <div class="btn btn-test">{{ label }}</div>
    </a>
</template>

<style scoped>
.btn-test {
    color: aliceblue;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
