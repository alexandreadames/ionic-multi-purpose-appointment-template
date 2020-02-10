//import { HttpClient } from '@angular/common/http';
//import { API_URL } from "./../../../environments/environment";
import { Component, OnInit } from '@angular/core';
//import { LoadingBarService } from "@ngx-loading-bar/core";

//const DADOSUSUARIO_URL = `${API_URL}dadosusuario`;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: any;

  constructor() //private http: HttpClient,
  //private loadingBar: LoadingBarService
  {}

  async ngOnInit() {
    await this.carregarPerfil();
  }

  async carregarPerfil() {
    /*this.loadingBar.start();
    this.http.get<any>(DADOSUSUARIO_URL).subscribe(
      (data: any) => {
        this.profile = data;
        this.loadingBar.complete();
        console.log(data);
      }, // success path
      (error: any) => {
        this.loadingBar.complete();
        console.log(error);
      }
    ); // error path);*/

    this.profile = {
      foto: 'assets/img/main_logo.png',
      nome: 'Core Studio',
      email: 'mariane_fisioterapia@hotmail.com',
      telefone: '(84) 99922-0068',
    };
  }

  getNivelByAbrev(abrev) {
    let nivel = '';

    switch (abrev) {
      case 'G':
        nivel = 'GRADUAÇÃO';
        break;
      case 'E':
        nivel = 'MESTRADO';
        break;
      case 'D':
        nivel = 'DOUTORADO';
        break;
      case 'L':
        nivel = 'LATO';
        break;
    }

    return nivel;
  }

  getNomeResumido(nomeCompleto) {
    var arr = nomeCompleto.split(' ');
    return arr[0] + ' ' + arr[arr.length - 1];
  }
}
