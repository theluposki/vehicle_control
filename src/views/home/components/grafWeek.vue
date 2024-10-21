<script setup>
import { ref } from 'vue'

const semana = ref([
    {
        diaSemana: 'dom',
        diaNum: '20/10',
        qtd: 0
    },
    {
        diaSemana: 'seg',
        diaNum: '21/10',
        qtd: 7
    },
    {
        diaSemana: 'ter',
        diaNum: '22/10',
        qtd: 19
    },
    {
        diaSemana: 'qua',
        diaNum: '23/10',
        qtd: 50
    },
    {
        diaSemana: 'qui',
        diaNum: '24/10',
        qtd: 5
    },
    {
        diaSemana: 'sex',
        diaNum: '25/10',
        qtd: 6
    },
    {
        diaSemana: 'sab',
        diaNum: '26/10',
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
            <span class="dayNum">{{ item.diaNum }}</span>
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

.grafweek .week .dayNum {
    width: 100%;
    background-color: var(--white2);
    color: var(--green2);
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    border-radius: 4px;
}
</style>