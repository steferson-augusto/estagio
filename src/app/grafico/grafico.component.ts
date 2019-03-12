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
    Object.assign(this, { single, multi })
  }

  ngOnInit() {
    const id = this.route.snapshot.firstChild.paramMap.get('id')
    this.questionario = this.questionarioService.getQuestionarioById(id)
    console.log(this.single)
    this.questionario.questoes.map(q => {
      const value = q.respostas.reduce((soma, nota) => soma += nota, 0) / q.respostas.length;
      const val = {name: q.label, value}
      this.data.push(val)
    })
    console.log(this.data)
  }

}
