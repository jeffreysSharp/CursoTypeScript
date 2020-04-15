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


  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
    console.log('this.rodadaFrase', this.rodadaFrase);
  }

  ngOnInit() {
  }

  atualizaResposta(event: Event) {
    this.resposta = (event.target as HTMLInputElement).value;
  }

  verificarResposta() {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      alert('A tradução está correta');

      this.rodada++;
      this.rodadaFrase = this.frases[this.rodada];
    } else {
      alert('A tradução está errada');

    }

  }

}
