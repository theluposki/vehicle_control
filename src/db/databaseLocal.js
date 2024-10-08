import Dexie from 'dexie';

export const db = new Dexie('vehicle_control');

db.version(2).stores({
  vehicle: '++id, placa, modelo, segmentacao, tipo, date, user, setor, matricula',
});

// "placa": "ABC1D23",
// "modelo": "Argo",
// "segmentacao": "consumidor",
// "tipo": "TP",
// "qtdPecas": 7,
// "observacao": "",
// "date": "2024-08-26T02:46:34.455Z"