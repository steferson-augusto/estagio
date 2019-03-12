import { Injectable } from '@angular/core';
import { usuarios } from '../data'

export class Usuario {
  id?: any;
  login?: string;
  senha?: string;
  token?: string;
  email?: string;
  tipo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: Usuario
  constructor() { 
    this.usuario = usuarios[0]
  }

  isProfessor(){
    return this.usuario.tipo == 'professor'
  }

  isCoordenador(){
    return this.usuario.tipo == 'coordenador'
  }
}