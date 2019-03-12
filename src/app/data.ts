export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];

export var multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];


export const usuarios = [
  {
    id: 1,
    login: 'professor',
    senha: '123456',
    token: '123',
    email: 'email@email.com',
    tipo: 'professor',
  },
  {
    id: 2,
    login: 'coordenador',
    senha: '123456',
    token: '123',
    email: 'email@email.com',
    tipo: 'coordenador',
  },
  {
    id: 3,
    login: 'aluno',
    senha: '123456',
    token: '123',
    email: 'email@email.com',
    tipo: 'aluno',
  },
  {
    id: 4,
    login: 'professor2',
    senha: '123456',
    token: '123',
    email: 'email@email.com',
    tipo: 'professor',
  },
  {
    id: 5,
    login: 'coordenador2',
    senha: '123456',
    token: '123',
    email: 'email@email.com',
    tipo: 'coordenador',
  }
]

export const questionarios = [
  {
    id: 1,
    label: 'Questionario 1',
    questoes: [
      {
        id: 1,
        tipo: 1,
        label: 'Pergunta 1'
      },
      {
        id: 2,
        tipo: 1,
        label: 'Pergunta 2'
      },
      {
        id: 3,
        tipo: 1,
        label: 'Pergunta 3'
      },
      {
        id: 4,
        tipo: 1,
        label: 'Pergunta 4'
      },
      {
        id: 5,
        tipo: 1,
        label: 'Pergunta 5'
      },
      {
        id: 6,
        tipo: 1,
        label: 'Pergunta 6'
      },
      {
        id: 7,
        tipo: 1,
        label: 'Pergunta 7'
      },
      {
        id: 8,
        tipo: 1,
        label: 'Pergunta 8'
      },
    ]
  },
  {
    id: 2,
    label: 'Questionario 2',
    questoes: [
      {
        id: 11,
        tipo: 1,
        label: 'Pergunta 11'
      },
      {
        id: 12,
        tipo: 1,
        label: 'Pergunta 12'
      },
      {
        id: 13,
        tipo: 1,
        label: 'Pergunta 13'
      },
      {
        id: 14,
        tipo: 1,
        label: 'Pergunta 14'
      },
      {
        id: 15,
        tipo: 1,
        label: 'Pergunta 15'
      },
      {
        id: 16,
        tipo: 1,
        label: 'Pergunta 16'
      },
      {
        id: 17,
        tipo: 1,
        label: 'Pergunta 17'
      },
      {
        id: 18,
        tipo: 1,
        label: 'Pergunta 18'
      },
    ]
  },
  {
    id: 3,
    label: 'Questionario 3',
    questoes: [
      {
        id: 21,
        tipo: 1,
        label: 'Pergunta 21'
      },
      {
        id: 22,
        tipo: 1,
        label: 'Pergunta 22'
      },
      {
        id: 23,
        tipo: 1,
        label: 'Pergunta 23'
      },
      {
        id: 24,
        tipo: 1,
        label: 'Pergunta 24'
      },
      {
        id: 25,
        tipo: 1,
        label: 'Pergunta 25'
      },
      {
        id: 26,
        tipo: 1,
        label: 'Pergunta 26'
      },
      {
        id: 27,
        tipo: 1,
        label: 'Pergunta 27'
      },
      {
        id: 28,
        tipo: 1,
        label: 'Pergunta 28'
      },
    ]
  },
]

export const respostas = [
  {
    questionario_id: 1,
    respostas: [
      {
        pergunta_id: 1,
        respostas: [1,2,3,4,5,1,2,3,4,5]
      },
      {
        pergunta_id: 2,
        respostas: [2,4,3,1,3,5,4,3,2,1]
      },
      {
        pergunta_id: 3,
        respostas: [2,2,2,4,5,1,2,3,1,2]
      },
      {
        pergunta_id: 4,
        respostas: [5,4,5,4,3,3,5,6,4,3]
      },
      {
        pergunta_id: 5,
        respostas: [3,3,3,3,1,2,3,4,3,2]
      },
      {
        pergunta_id: 6,
        respostas: [4,4,3,4,1,2,3,4,1,2]
      },
      {
        pergunta_id: 7,
        respostas: [2,3,5,2,1,2,3,4,5,1]
      },
      {
        pergunta_id: 8,
        respostas: [1,2,3,4,5,1,2,3,4,5]
      },
    ]
  },
  {
    questionario_id: 2,
    respostas: [
      {
        pergunta_id: 11,
        respostas: [4,4,4,4,4,3,2,3,4,5]
      },
      {
        pergunta_id: 12,
        respostas: [3,4,5,3,4,5,4,2,3,2]
      },
      {
        pergunta_id: 13,
        respostas: [1,2,3,1,2,3,4,5,4,5]
      },
      {
        pergunta_id: 14,
        respostas: [4,5,4,5,4,5,4,3,4,5]
      },
      {
        pergunta_id: 15,
        respostas: [1,2,3,4,5,1,2,3,4,4]
      },
      {
        pergunta_id: 16,
        respostas: [1,1,1,2,3,3,4,4,4,4]
      },
      {
        pergunta_id: 17,
        respostas: [1,5,1,5,1,5,1,5,1,5]
      },
      {
        pergunta_id: 18,
        respostas: [2,4,2,4,2,4,2,4,2,4]
      },
    ]
  },
  ,
  {
    questionario_id: 3,
    respostas: [
      {
        pergunta_id: 21,
        respostas: [1,1,1,1,1,1,1,1,1,1]
      },
      {
        pergunta_id: 22,
        respostas: [2,2,2,2,2,2,2,2,2,2]
      },
      {
        pergunta_id: 23,
        respostas: [3,3,3,3,3,3,3,3,3,3]
      },
      {
        pergunta_id: 24,
        respostas: [4,4,4,4,4,4,4,4,4,4]
      },
      {
        pergunta_id: 25,
        respostas: [5,5,5,5,5,5,5,5,5,5]
      },
      {
        pergunta_id: 26,
        respostas: [4,4,4,4,4,4,4,4,4,4]
      },
      {
        pergunta_id: 27,
        respostas: [3,3,3,3,3,3,3,3,3,3]
      },
      {
        pergunta_id: 28,
        respostas: [2,2,2,2,2,2,2,2,2,2]
      },
    ]
  },
]