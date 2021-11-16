import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://alessandro.com";
  cursoAngular: boolean = true;
  urlImagem: string = "https://lorempixel.com/400/200/nature/";
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc'

  valorInicial = 15;
  nomeDoCurso: string = 'Angular';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor(){
    return 1;
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(value: any){
    this.valorSalvo = value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;

  }
  botaoClicado(){
    alert("Botão clicado");
  }
  getCurtirCurso(){
    return true;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }
    constructor() { }

  ngOnInit(): void {
  }

}
