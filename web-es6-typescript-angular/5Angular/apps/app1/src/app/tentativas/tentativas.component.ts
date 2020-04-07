import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {

  coracaoVazio = '/assets/img/coracao_vazio.png';
  coracaoCheio = '/assets/img/coracao_cheio.png';

  constructor() { }

  ngOnInit() {
  }

}
