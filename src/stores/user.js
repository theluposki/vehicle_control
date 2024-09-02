import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const User = ref({
    id: window.crypto.randomUUID(),
    nome: "Lucas Oliveira",
    matricula: 420033,
    setor: "Troca de Peças",
    photoUrl: "https://i.pravatar.cc/150?img=13"
  });

  const setUser = (user) => {
    User.value = user;
  };

  const unsetUser = () => {
    User.value = {};
  };

  return { User, setUser, unsetUser };
});
