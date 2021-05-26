import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {
  public amigos = [{
    id:0,
    nome: "123",
    idade: "123",
    nivel_amizade: "5"
  }, {
    id:1,
    nome: "124",
    idade: "124",
    nivel_amizade: "4"
  }, {
    id:2,
    nome: "125",
    idade: "125",
    nivel_amizade: "3"
  }, {
    id:3,
    nome: "126",
    idade: "126",
    nivel_amizade: "2"
  }, {
    id:4,
    nome: "127",
    idade: "127",
    nivel_amizade: "1"
  }];

  constructor(public actionSheetController: ActionSheetController) { }

  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ações',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Deletar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteAmigo(id);
        }
      }, {
        text: 'Editar',
        icon: 'cog',
        role: 'destructive',
        handler: () => {

        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async deleteAmigo(id){
    this.amigos.splice(id, 1);
  }

  ngOnInit() {
  }

}
