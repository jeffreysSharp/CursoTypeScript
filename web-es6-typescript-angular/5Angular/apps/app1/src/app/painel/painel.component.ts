import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})

export class PainelComponent implements OnInit {

  frases: Frase[] = FRASES;
  instrucao = 'Traduza a frase';
  resposta = '';
  rodada = 0;
  rodadaFrase: Frase;
  progresso = 0;


  constructor() {
    this.atualizaRodada();

  }

  ngOnInit() {
  }

  atualizaResposta(event: Event) {
    this.resposta = (event.target as HTMLInputElement).value;
  }

  verificarResposta() {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;
      this.atualizaRodada();
      this.progresso = this.progresso + (100 / this.frases.length);


    } else {

    }

  }

  atualizaRodada() {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
