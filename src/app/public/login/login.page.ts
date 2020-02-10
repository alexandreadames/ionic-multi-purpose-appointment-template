import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from "@ionic/angular";
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading: any;
 
  constructor(
    private authService: AuthenticationService, 
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) { }

  ngOnInit() {
  }
 
  async login(form) {
    console.log(form.value);
    await this.presentLoading("Efetuando login...");
    this.authService.login(form.value).subscribe(
      data => {
        this.loading.dismiss();
        console.log(data);
      },
      error => {
        this.loading.dismiss();
        console.log(error);
        this.showToast("Login ou senha inválida!");
      }
    );
  }

  async presentLoading(msg: string) {
    this.loading = await this.loadingCtrl.create({
      message: msg
    });
    await this.loading.present();
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: "bottom",
      color: "dark"
    });

    toast.present();
  }
 
}