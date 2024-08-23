<script setup>
import HeaderM from './components/header/header.vue';
import MainM from './components/main/main.vue';
import FooterM from './components/footer/footer.vue';

import notificationList from './components/notification/notificationList.vue';
import { notifications } from './components/notification/notificationService.js';
</script>

<template>
  <notificationList :notifications="notifications" />
  <HeaderM />
  <MainM />
  <FooterM />
</template>
