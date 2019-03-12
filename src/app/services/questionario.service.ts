import { Injectable } from '@angular/core';
import { questionarios } from '../data'

export class Questao {
  id: any;
  tipo: number;
  label: string;
}

export class Questionario {
  id: any;
  label: string;
  questoes?: Questao[];
}

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  constructor() { }

  getLabelsQuestionarios() { 
    const questions = questionarios.map(q => {
      const quest = {
        id: q.id,
        label: q.label
      }
      return quest
    }) 
    return questions
  }
}
