<script setup>
import { Emitter } from '@/utils/Emitter';
import { onMounted, ref } from 'vue';

onMounted(() => {
  Emitter.emit('add-car')
  setTimeout(() => {
    Emitter.emit('name-route', 'Finalizar etapa troca de peças')
  }, 100);

  setVehicleAlive();
})

const modelos = ref([
  'Argo',
  'Onix',
  'Onix Plus',
  'KA',
  'Mobi'
])

const vehicle = ref({
  placa: null,
  modelo: null,
  segmentacao: null,
  tipo: null,
  qtdPecas: null,
  observacao: ""
});

const placaValida = ref(true);
const placaNotEmpty = ref(true);
const modeloValido = ref(true);
const segmentacaoNotEmpty = ref(true);
const tipoNotEmpty = ref(true);
const qtdPecasNotEmpty = ref(true);

function validarPlaca() {
  if (!vehicle.value.placa) {
    document.getElementById('placa').scrollIntoView({ behavior: 'smooth' });
    placaNotEmpty.value = false
    return
  }

  placaNotEmpty.value = true
  const placaValue = vehicle?.value.placa.trim();

  const regexMercosul = /^[A-Z]{3}\d[A-Z]\d{2}$/;

  const regexAntigo = /^[A-Z]{3}-\d{4}$/;

  placaValida.value = regexMercosul.test(placaValue) || regexAntigo.test(placaValue);
  if (!placaValida.value) {
    document.getElementById('placa').scrollIntoView({ behavior: 'smooth' });
  }
}

let timeoutValidaPlacaVal, timeoutValidaModeloVal, timeoutValidaQtdPecasVal, timeoutObservationVal;

const timeoutValidaPlaca = () => {
  if (timeoutValidaPlacaVal) {
    clearTimeout(timeoutValidaPlacaVal);
  }
  timeoutValidaPlacaVal = setTimeout(() => {
    validarPlaca();
    keepAliveVehicle();
  }, 600);
}

const timeoutValidaModelo = () => {
  if (timeoutValidaModeloVal) {
    clearTimeout(timeoutValidaModeloVal);
  }
  timeoutValidaModeloVal = setTimeout(() => {
    validarModelo();
    keepAliveVehicle();
  }, 600);
}

const timeoutValidaQtdPecas = () => {
  if (timeoutValidaQtdPecasVal) {
    clearTimeout(timeoutValidaQtdPecasVal);
  }
  timeoutValidaQtdPecasVal = setTimeout(() => {
    validarQtdPecas();
    keepAliveVehicle();
  }, 600);
}

const timeoutObservation = () => {
  if (timeoutObservationVal) {
    clearTimeout(timeoutObservationVal);
  }
  timeoutObservationVal = setTimeout(() => {
    keepAliveVehicle();
  }, 600);
}


function validarModelo() {
  const modeloValue = vehicle.value.modelo
  modeloValido.value = true
  if (!modeloValue || modeloValue == "" || null) {
    modeloValido.value = false
    document.getElementById('modelo').scrollIntoView({ behavior: 'smooth' });
  }
}

function validaSegmentacao() {
  if (!vehicle.value.segmentacao) {
    document.getElementById('segmentacao').scrollIntoView({ behavior: 'smooth' });
    segmentacaoNotEmpty.value = false
    return
  }
  segmentacaoNotEmpty.value = true
  keepAliveVehicle();
}

function validaTipo() {
  if (!vehicle.value.tipo) {
    document.getElementById('tipo').scrollIntoView({ behavior: 'smooth' });
    tipoNotEmpty.value = false
    return
  }
  tipoNotEmpty.value = true
  keepAliveVehicle();
}

function validarQtdPecas() {
  const qtdPecasValue = vehicle.value.qtdPecas
  qtdPecasNotEmpty.value = true
  if (!qtdPecasValue || qtdPecasValue == "" || null) {
    qtdPecasNotEmpty.value = false
    document.getElementById('qtdPecas').scrollIntoView({ behavior: 'smooth' });
  }
}

const validate = () => {
  validarPlaca();
  validarModelo();
  validaSegmentacao();
  validaTipo();
  validarQtdPecas();
}

const clearVehicle = () => {
  vehicle.value = {
    placa: null,
    modelo: null,
    segmentacao: null,
    tipo: null,
    qtdPecas: null,
    observacao: ""
  }
}

const VEHICLE_STORAGE = 'currentVehicle'

const clearKeepAliveVehicle = () => {
  localStorage.removeItem(VEHICLE_STORAGE);
}

const keepAliveVehicle = () => {
  const localVehicle = vehicle.value

  const localVehicleJson = JSON.stringify(localVehicle);

  localStorage.setItem(VEHICLE_STORAGE, localVehicleJson);
}

const setVehicleAlive = () => {

    if (localStorage.getItem(VEHICLE_STORAGE)) {
      const aliveVehicleJson = localStorage.getItem(VEHICLE_STORAGE)

      const aliveVehicle = JSON.parse(aliveVehicleJson);

      vehicle.value = aliveVehicle


      if (vehicle.value.observacao) {
        document.querySelector('#detailsObservacao').open = true;
      }
    }
}

const send = () => {
  if (!vehicle.value.placa || !vehicle.value.modelo || !vehicle.value.segmentacao || !vehicle.value.tipo || !vehicle.value.qtdPecas) {
    validate();
    return
  }

  console.log("registrado");
  clearKeepAliveVehicle();
  clearVehicle();

}

</script>


<template>
  <main class="page int">
    <div class="form-control">
      <label for="placa" class="label-required">Placa:</label>
      <input type="text" tabindex="1" :class="{ 'input': true, 'invalid': !placaValida || !placaNotEmpty }"
        v-model="vehicle.placa" id="placa" maxlength="7" @keyup="timeoutValidaPlaca"
        placeholder="placa do veículo. EX: ABC1D123 ou ABC-1234" @blur="validarPlaca">
      <p v-if="!placaValida" class="error-message">Placa inválida!</p>
      <p v-if="!placaNotEmpty" class="error-message">Placa é obrigatória!</p>
    </div>

    <div class="form-control">
      <label for="modelo" class="label-required">Modelo:</label>
      <input type="text" list="modelos" tabindex="2" :class="{ 'input': true, 'invalid': !modeloValido }"
        v-model="vehicle.modelo" id="modelo" @keyup="timeoutValidaModelo" placeholder="modelo do veículo">
      <p v-if="!modeloValido" class="error-message">ops, esqueceu de digitar o modelo!</p>
    </div>

    <datalist id="modelos">
      <option v-for="item in modelos" :value="item"></option>
    </datalist>

    <div class="form-group" id="segmentacao">
      <fieldset :class="{ 'fieldsetNotSelected': !segmentacaoNotEmpty }">
        <legend>Segmentação</legend>
        <div class="field">
          <label for="consumidor" class="label-radio consumidor">Consumidor</label>
          <input type="radio" @change="validaSegmentacao" tabindex="3" id="consumidor" name="segmentacao"
            class="input-radio" v-model="vehicle.segmentacao" value="consumidor">
        </div>
        <div class="field">
          <label for="revenda" class="label-radio revenda">Revenda</label>
          <input type="radio" @change="validaSegmentacao" tabindex="4" id="revenda" name="segmentacao"
            class="input-radio" v-model="vehicle.segmentacao" value="revenda">
        </div>
      </fieldset>
    </div>

    <div class="form-group" id="tipo">
      <fieldset :class="{ 'fieldsetNotSelected': !tipoNotEmpty }">
        <legend>Tipo de serviço</legend>
        <div class="field">
          <label for="tp" class="label-radio tp">Troca de peça</label>
          <input type="radio" @change="validaTipo" tabindex="5" id="tp" name="tipo" class="input-radio"
            v-model="vehicle.tipo" value="TP">
        </div>
        <div class="field">
          <label for="sm" class="label-radio sm">Serviço mecânico</label>
          <input type="radio" @change="validaTipo" tabindex="6" id="sm" name="tipo" class="input-radio"
            v-model="vehicle.tipo" value="SM">
        </div>
      </fieldset>
    </div>

    <div class="form-control">
      <label for="qtdPecas" class="label-required">Quantidade de Peças:</label>
      <input type="tel" min="1" max="2" maxlength="2" tabindex="7"
        :class="{ 'input': true, 'invalid': !qtdPecasNotEmpty }" v-model.number="vehicle.qtdPecas" id="qtdPecas"
        placeholder="Ex: 3" @keyup="timeoutValidaQtdPecas">
      <p v-if="!qtdPecasNotEmpty" class="error-message">ops, esqueceu de digitar a quantidade de peças!</p>
    </div>

    <details id="detailsObservacao">
      <summary>Alguma observação sobre o veículo?</summary>
      <div class="form-control">
        <label for="observacao" class="label">Observação:</label>
        <textarea class="textarea" @keyup="timeoutObservation" v-model="vehicle.observacao" id="observacao"
          placeholder="Ex: veículo com amassado na porta d/d."></textarea>
      </div>
    </details>

    <div class="form-control">
      <button class="btn" @click="send" tabindex="8">
        Registrar
        <i class="ri-save-3-fill"></i>
      </button>
    </div>

  </main>
</template>

<style scoped>
.invalid {
  outline: 2px solid red;
}

.error-message {
  color: red;
  margin-top: 5px;
}
</style>