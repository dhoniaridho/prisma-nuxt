<script setup lang="ts">
const { data } = useLazyFetch("/api/user");
</script>
<template>{{ data }}</template>
