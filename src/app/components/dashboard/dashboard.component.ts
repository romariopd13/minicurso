import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cursos: any[] = []

  curso: any = {}
  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.getAllCursos()
  }
  getAllCursos(){
    this.cursos = this.cursoService.getCursos();
  }
  enviarCurso(){
    this.cursoService.salvarCurso(this.curso)
    this.cursos.push(this.curso)
  }
}
