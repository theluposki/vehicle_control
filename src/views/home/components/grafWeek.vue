<script setup>
import { ref } from 'vue'

const semana = ref([
    {
        diaSemana: 'dom',
        qtd: 0
    },
    {
        diaSemana: 'seg',
        qtd: 7
    },
    {
        diaSemana: 'ter',
        qtd: 19
    },
    {
        diaSemana: 'qua',
        qtd: 50
    },
    {
        diaSemana: 'qui',
        qtd: 5
    },
    {
        diaSemana: 'sex',
        qtd: 6
    },
    {
        diaSemana: 'sab',
        qtd: 2
    },
])
</script>

<template>
    <div class="grafweek">
        <div class="week" v-for="(item, i) in semana" :key="i">
            <span class="graf" :data-qtd="item.qtd">
                <div class="ponto" v-for="ponto in item.qtd"></div>
            </span>
            <span class="day">{{ item.diaSemana }}</span>
        </div>
    </div>
</template>

<style scoped>
.grafweek {
    background-color: var(--white2);
    padding: var(--p-base);
    display: flex;
    gap: 10px;
}

.grafweek .week {
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
}

.grafweek .week .graf {
    position: relative;
    min-width: 100%;
    min-height: 350px;
    background-color: var(--silver);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1px;

}

.grafweek .week .graf .ponto {
    min-width: 100%;
    --height-bar: 5px;
    min-height: var(--height-bar);
    max-height: var(--height-bar);
    background-color: var(--green3);
}

.grafweek .week .graf::before {
    content: attr(data-qtd);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 4px;
    background-color: rgba(1, 96, 42, 0.7);
    color: var(--white);
}

.grafweek .week .day {
    width: 100%;
    background-color: rgba(1, 96, 42, 0.7);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 4px;
}
</style>