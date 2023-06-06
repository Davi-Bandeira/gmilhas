import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'gmilhas-front-end';
  saldo = 0;
  receitas = 0;
  despesas = 0;
  cartao = 0;

  ngOnInit(): void {
    // Código do evento "DOMContentLoaded" aqui
    this.saldo = this.getRandomValue();
    this.receitas = this.getRandomValue();
    this.despesas = this.getRandomValue();
    this.cartao = this.getRandomValue();
  }

// Função para gerar um valor aleatório
  getRandomValue(): number {
    const min = 0;
    const max = 10000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
