<script setup>
import { removeNotification } from "./notificationService.js";

defineProps({
  index: Number,
  message: String,
  status: String,
});
</script>

<template>
    <li :class="`Notification ${status}`">
      <div class="message">
        <i class="ri-error-warning-line" v-if="status === 'error'"></i>
        <i class="ri-alert-line" v-if="status === 'alert'"></i>
        <i class="ri-notification-line" v-if="status === 'success'"></i>
        <span>
          {{ message }}
        </span>
      </div>
      <button :class="`btn-close ${status}`" @click="removeNotification(index)">
        <i class="ri-close-line"></i>
      </button>
    </li>
</template>

<style scoped>

.Notification {
  --wh-notifications: 60px;
  min-height: var(--wh-notifications);
  max-height: var(--wh-notifications);

  background-color: var(--white5);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
  padding: 8px 12px;
  
  border: solid 2px var(--dark);
  color: var(--dark);
  text-shadow: 0px -1px 0px var(--dark5);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.Notification > i {
  font-size: 1.4rem;
}

.message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.message > span {
  font-weight: normal;
  font-size: 1.1rem;
}

.success {
  background-color: var(--white);
  border: solid 4px var(--green2);
  color: var(--green2);
}

.alert {
  background-color: var(--white);
  border: solid 2px var(--alert);
  color: var(--alert);
}

.error {
  background-color: var(--white);
  border: solid 2px var(--danger);
  color: var(--danger);
}

.btn-close {
  width: 32px;
  height: 32px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.btn-close i {
  font-size: 2rem;
}

.btn-close:active {
  scale: 0.95;
}
</style>