import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const User = ref({
    id: window.crypto.randomUUID(),
    nome: "Lucas Oliveira",
    matricula: 420033,
    setor: "Troca de Peças",
  });

  const setUser = (user) => {
    User.value = user;
  };

  const unsetUser = () => {
    User.value = {};
  };

  return { User, setUser, unsetUser };
});
