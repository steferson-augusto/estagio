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
    this.data = []  //limpa o vetor
    this.questionario = this.questionarioService.getQuestionarioById(id)  //pega questionario pelo respectivo id
    const questions = this.questionario.questoes.filter(q => q.tipo == 1) //seleciona as questoes do questionario que não são do "tipo 1"
    questions.map(q => {  //"itera" sobre as questoes
      const value = q.respostas.reduce((soma, nota) => soma += nota, 0) / q.respostas.length  //calcula a media das respostas de cada questao
      const val = { name: q.label, value }  //salva os valores no padrão da biblioteca ngx-charts para posterior exibição
      this.data.push(val) //adiciona o valor na variável a ser usada como base no gráfico
    })
    this.startDetalhes(this.questionario.questoes[0].label) //"configura" o segundo grafico
  }

  startDetalhes(e){
    e.name ? e = e.name : e = e //esse parametro pode ser recebido de 2 formas, como objeto ou como string, por isso passo para apenas "e"
    const question = this.questionario.questoes.filter(q => q.label == e)[0]  //seleciona a pergunta com parametro onde label == "e"
    const possibilidades = [1,2,3,4,5]  //alternativas possíveis, fazer dinamico?
    const respostas = possibilidades.map(p => { //"itera" sobre as possibilidades
      return question.respostas.filter(q => q == p).reduce((soma, nota) => soma+=1, 0)  //soma as ocorrencias da possibilidade em questao
    })
    this.dataDetalhes = []  //limpa o vetor
    respostas.map((r,i) => {  //"itera" sobre as respostas
      const val = { name: `Opção ${i+1}`, value: r }  //formata no padrão de uso do ngx-charts
      this.dataDetalhes.push(val) //adiciona na variavel base do grafico
    })
    this.pergunta = e //armazena o label da pergunta selecionada
  }

  ngOnInit() {
    this.start(1) //1 nao eh uma boa ideia, deixar dinamico
  }

  onSelect(e){
    this.startDetalhes(e)
  }

}
