<script setup>
defineProps({
    title: String,
    id: String
})
</script>

<template>
    <section :id="id" class="mb-3">
        <fieldset class="card">
            <legend class="card-header">{{ title }}</legend>
            <div class="card-body">
                <slot></slot>
            </div>
        </fieldset>
    </section>
</template>

<style scoped>
.card {
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow:
        0 12px 24px rgba(0, 0, 0, 0.25),
        0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
