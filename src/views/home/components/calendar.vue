<script setup>
import { ref, computed } from 'vue';

// Dados iniciais
const currentDate = ref(new Date());
const today = ref(new Date().getDate());
const currentMonth = ref(currentDate.value.getMonth());
const currentYear = ref(currentDate.value.getFullYear());

const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

// Função para calcular os dias do mês
const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
};

// Função para pegar o mês anterior
const getPreviousMonth = (month, year) => {
    if (month === 0) {
        return { month: 11, year: year - 1 };
    } else {
        return { month: month - 1, year };
    }
};

// Gerar calendário dinâmico
const calendar = computed(() => {
    const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1).getDay();
    const totalDays = daysInMonth(currentYear.value, currentMonth.value);

    // Pegar o mês anterior para preencher os dias faltantes no início
    const { month: prevMonth, year: prevYear } = getPreviousMonth(currentMonth.value, currentYear.value);
    const prevMonthDays = daysInMonth(prevYear, prevMonth);

    let daysArray = [];

    // Adicionar dias do mês anterior se o mês atual não começar no domingo
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        daysArray.push({ day: prevMonthDays - i, muted: true, isToday: false });
    }

    // Preencher dias do mês atual
    for (let day = 1; day <= totalDays; day++) {
        daysArray.push({
            day,
            muted: false,
            isToday: day === today.value && currentMonth.value === currentDate.value.getMonth() && currentYear.value === currentDate.value.getFullYear()
        });
    }

    // Adicionar dias do próximo mês para completar o calendário, se necessário
    const nextMonthDays = 42 - daysArray.length; // 42 = 7 dias x 6 semanas
    for (let i = 1; i <= nextMonthDays; i++) {
        daysArray.push({ day: i, muted: true, isToday: false });
    }

    // Quebrar o array de dias em colunas (por semana)
    const calendarMatrix = Array.from({ length: 7 }, () => []);
    daysArray.forEach((dateObj, index) => {
        calendarMatrix[index % 7].push(dateObj);
    });

    return calendarMatrix;
});

// Funções de navegação
const prevMonth = () => {
    if (currentMonth.value === 0) {
        currentMonth.value = 11;
        currentYear.value--;
    } else {
        currentMonth.value--;
    }
};

const nextMonth = () => {
    if (currentMonth.value === 11) {
        currentMonth.value = 0;
        currentYear.value++;
    } else {
        currentMonth.value++;
    }
};
</script>


<template>
    <div class="container">
        <div class="controllers">
            <span @click="prevMonth">
                <i class="ri-arrow-left-s-line"></i>
            </span>
            <span class="info-month">{{ monthNames[currentMonth] }} {{ currentYear }}</span>
            <span @click="nextMonth">
                <i class="ri-arrow-right-s-line"></i>
            </span>
        </div>

        <div class="calendar">
            <div class="column" v-for="(day, index) in weekDays" :key="index">
                <div class="row dayMonth">{{ day }}</div>
                <div class="row" v-for="(dateObj, i) in calendar[index]" :key="i"
                    :class="{ muted: dateObj.muted, today: dateObj.isToday }">
                    {{ dateObj.day }}
                </div>
            </div>
        </div>
        <div class="month">{{ monthNames[currentMonth] }}</div>
    </div>
</template>


<style scoped>
.container {
    --height-container: 350px;
    position: relative;
    min-width: 100%;
    min-height: var(--height-container);
    background-color: var(--white2);
    display: flex;
    flex-direction: column;
    gap: 1px;
    margin: calc(2 * var(--p-base)) 0;
    padding: 0 var(--p-base);
}

.container .controllers {
    --height-controllers: 25px;
    border-radius: 4px;
    min-height: var(--height-controllers);
    max-height: var(--height-controllers);
    background-color: var(--green2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--white);
    gap: var(--p-base);
}

.container .controllers i {
    font-size: 22px;
    width: 30px;
    cursor: pointer;
    background-color: var(--green1);
}

.container .controllers i:active {
    scale: 2;
}

.container .controllers .info-month {
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container .calendar {
    flex: 1;
    display: flex;
    gap: 1px;
    padding: var(--p-base);
}

.container .calendar .column {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.container .calendar .column .row {
    flex-grow: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px var(--white5);
    color: var(--dark2);
}

.container .calendar .column .dayMonth {
    background-color: rgba(1, 96, 42, 0.7);
    color: var(--white);
    font-weight: bold;
    border-radius: 4px;
    border: solid 0px transparent;
}

.container .calendar .column .row.muted {
    color: var(--dark5);
    /* Cor mais clara para "muted" */
}

.container .calendar .column .row.today {
    background-color: var(--green3);
    font-weight: bold;
    /* Destaque de fundo para o dia atual */
    color: var(--white);
}

.container .month {
    --height-month: 25px;
    border-radius: 4px;
    min-height: var(--height-month);
    max-height: var(--height-month);
    background-color: var(--green2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--white);
}
</style>
