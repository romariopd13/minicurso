import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  getCursos(){
    return [
      {nome: 'Angular', experiencia: '+3 anos', versao: 13},
      {nome: 'Javascript', experiencia: '+3 anos', versao: 6},
      {nome: 'C#', experiencia: '+2 anos', versao: 6},
      {nome: 'Java', experiencia: '+2 anos', versao: 11},
      {nome: 'Python', experiencia: '+2 anos', versao: 6},
    ]
  }

  salvarCurso(curso: any){
    console.log(curso)
    this.getCursos().push(curso)
  }
}
