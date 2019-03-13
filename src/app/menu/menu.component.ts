import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuestionarioService, Questionario } from '../services/questionario.service'
import { GraficoComponent } from '../grafico/grafico.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  @ViewChild('grafico') private grafico: GraficoComponent;
  questionarios: Questionario[]
  id_questionario = null
  sub: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private questionarioService: QuestionarioService,
    ) {
    this.questionarios = this.questionarioService.getLabelsQuestionarios()
  }

  f(id){
    this.id_questionario = id
    this.grafico.start(id)
  }
}
