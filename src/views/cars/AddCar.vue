<script setup>
import { Emitter } from '@/utils/Emitter';
import { onMounted, ref } from 'vue';

onMounted(() => {
  Emitter.emit('add-car')
  setTimeout(() => {
    Emitter.emit('name-route', 'Adicionar nova entrada')
  }, 100)
})

const vehicle = ref({
  placa: null,
  modelo: null,
  segmentacao: null,
  tipo: null,
  qtdPecas: null,
  observacao: ""
})
</script>


<template>
  <main class="page int">
    <div class="form-control">
      <label for="placa" class="label-required">Placa:</label>
      <input type="text" tabindex="1" class="input" v-model="vehicle.placa" id="placa"
        placeholder="digite a placa do veículo">
    </div>

    <div class="form-control">
      <label for="modelo" class="label-required">Modelo:</label>
      <input type="text" tabindex="2" class="input" v-model="vehicle.modelo" id="modelo"
        placeholder="digite o modelo do veículo">
    </div>

    <div class="form-group">
      <div class="field">
        <label for="consumidor" class="label-radio consumidor">Consumidor</label>
        <input type="radio" tabindex="3" id="consumidor" name="segmentacao" class="input-radio"
          v-model="vehicle.segmentacao" value="consumidor">
      </div>
      <div class="field">
        <label for="revenda" class="label-radio revenda">Revenda</label>
        <input type="radio" tabindex="4" id="revenda" name="segmentacao" class="input-radio"
          v-model="vehicle.segmentacao" value="revenda">
      </div>
    </div>

    <div class="form-group">
      <div class="field">
        <label for="tp" class="label-radio tp">Troca de peça</label>
        <input type="radio" tabindex="5" id="tp" name="tipo" class="input-radio" v-model="vehicle.tipo" value="TP">
      </div>
      <div class="field">
        <label for="sm" class="label-radio sm">Serviço mecânico</label>
        <input type="radio" tabindex="6" id="sm" name="tipo" class="input-radio" v-model="vehicle.tipo"
          value="SM">
      </div>
    </div>

    <div class="form-control">
      <label for="qtdPecas" class="label-required">Quantidade de Peças:</label>
      <input type="number" tabindex="7" class="input" v-model.number="vehicle.qtdPecas" id="qtdPecas" placeholder="Ex: 3">
    </div>

    <div class="form-control">
      <label for="observacao" class="label">Observação:</label>
      <textarea class="textarea" v-model="vehicle.observacao" id="observacao"
        placeholder="Alguma observação sobre o veículo."></textarea>
    </div>

    <div class="form-control">
      <button class="btn" tabindex="8">
        Registrar
      </button>
    </div>

  </main>
</template>