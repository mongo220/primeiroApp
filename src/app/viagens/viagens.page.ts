import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {
  public locais = [{
    id:0,
    local: "123",
    descricao: "123",
    visita: "5",
    imagem:"/assets/download.jpg"
  }, {
    id:1,
    local: "123",
    descricao: "123",
    visita: "5",
    imagem:"/assets/download2.jpg"
  }];
  constructor() { }

  ngOnInit() {
  }

}
