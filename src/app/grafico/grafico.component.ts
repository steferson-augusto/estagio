import { Component, OnInit } from '@angular/core';
import { QuestionarioService, Questionario } from '../services/questionario.service'
import { single, multi } from '../data';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  questionario: Questionario;
  pergunta: string;
  single: any[];
  multi: any[];
  data: any[] = [];
  dataDetalhes: any[] = []

  view: any[] = [700, 400];
  view2: any[] = [650, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Pergunta';
  showYAxisLabel = true;
  yAxisLabel = 'Média';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#7aa3e5']
  };
  constructor(
    private questionarioService: QuestionarioService
    ) {
    Object.assign(this, { single, multi }) //pode remover, são apenas exemplos
  }

  start(id){
    this.data = []
    this.questionario = this.questionarioService.getQuestionarioById(id)  //pega questionario pelo respectivo id
    const questions = this.questionario.questoes.filter(q => q.tipo == 1) //seleciona as questoes do questionario que não são do "tipo 1"
    questions.map(q => {  //"itera" sobre as questoes
      const value = q.respostas.reduce((soma, nota) => soma += nota, 0) / q.respostas.length  //calcula a media das respostas de cada questao
      const val = { name: q.label, value }  //salva os valores no padrão da biblioteca ngx-charts para posterior exibição
      this.data.push(val) //adiciona o valor na variável a ser usada como base no gráfico
    })
    this.startDetalhes(this.questionario.questoes[0].label)
  }

  startDetalhes(e){
    e.name ? e = e.name : e = e
    const question = this.questionario.questoes.filter(q => q.label == e)[0]
    const possibilidades = [1,2,3,4,5]
    const respostas = possibilidades.map(p => {
      return question.respostas.filter(q => q == p).reduce((soma, nota) => soma+=1, 0)
    })
    this.dataDetalhes = []
    respostas.map((r,i) => {
      const val = { name: `Opção ${i+1}`, value: r }
      this.dataDetalhes.push(val)
    })
    this.pergunta = e
  }

  ngOnInit() {
    this.dataDetalhes = this.single
    this.start(1)
  }

  onSelect(e){
    this.startDetalhes(e)
  }

}
