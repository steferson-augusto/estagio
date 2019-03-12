import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionarioService, Questionario } from '../services/questionario.service'
import { single, multi } from '../data';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  questionario: Questionario;
  single: any[];
  multi: any[];
  data: any[] = [];

  view: any[] = [700, 400];

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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor(
    private route: ActivatedRoute,
    private questionarioService: QuestionarioService
    ) {
    Object.assign(this, { single, multi }) //pode remover, são apenas exemplos
  }

  ngOnInit() {
    const id = this.route.snapshot.firstChild.paramMap.get('id')  //pega o id do questionario pela rota
    this.questionario = this.questionarioService.getQuestionarioById(id)  //pega questionario pelo respectivo id
    const questions = this.questionario.questoes.filter(q => q.tipo == 1) //seleciona as questoes do questionario que não são do "tipo 1"
    questions.map(q => {
      const value = q.respostas.reduce((soma, nota) => soma += nota, 0) / q.respostas.length  //calcula a media das respostas de cada questao
      const val = { name: q.label, value }  //salva os valores no padrão da biblioteca ngx-charts para posterior exibição
      this.data.push(val) //adiciona o valor na variável a ser usada como base no gráfico
    })
    console.log(this.data)
  }

}
