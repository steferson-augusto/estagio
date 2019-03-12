import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuestionarioService, Questionario } from '../services/questionario.service'
import { GraficoComponent } from '../grafico/grafico.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
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
    private r : Router,
    private route : ActivatedRoute,
    ) {
    this.questionarios = this.questionarioService.getLabelsQuestionarios()
  }

  f(id){
    console.log(id)
    console.log(this.r)
    this.reloadWithNewId(id)
  }

  reloadWithNewId(id:number) {
    this.r.navigateByUrl('/graficos/questionario' + id).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  paramsChanged(id) {
    this.id_questionario = id
    console.log(id)
    console.log(this.id_questionario)

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.paramsChanged(params['id'])
    });
  }

}
