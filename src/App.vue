<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
	<TheHeader />
	<RouterView />
</template>

<style>
@import "./assets/base.css";
</style>
