import { Injectable } from '@angular/core';
import { questionarios } from '../data'

export class Questao {
  id: any;
  tipo: number;
  label: string;
  respostas?: any[];
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

  filterById(id){
    return function filter(value){
      return value.id == id
    }
  }

  getQuestionarioById(id){
    return questionarios.filter(this.filterById(id))[0]
  }
}
