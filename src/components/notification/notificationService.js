import { ref } from "vue";

const notifications = ref([]);

function removeNotification(index) {
  notifications.value.splice(index, 1);
}

function showNotification(message='mensagem', status="success") {
  notifications.value.push({ message, status });
  setTimeout(() => {
    removeNotification()
  }, 5000);
}

export { notifications, showNotification, removeNotification };