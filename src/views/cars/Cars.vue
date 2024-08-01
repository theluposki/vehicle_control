<script setup>
import { RouterView } from 'vue-router'
import HeaderIntern from '../../components/header_intern/header_intern.vue'
</script>

<template>
    <main class="page">
      <HeaderIntern />
      <RouterView />
    </main>
  </template>
  