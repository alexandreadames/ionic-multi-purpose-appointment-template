import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
 
const TOKEN_KEY = 'auth-token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  authenticationState = new BehaviorSubject(false);
 
  constructor(private storage: Storage, private plt: Platform) { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }
 
  /*login() {
    return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
      this.authenticationState.next(true);
    });
  }*/

  login(credentials) {
    return Observable.create(observer => {
      /**header */
      /*const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/x-www-form-urlencoded"
        })
      };*/

      /**body */
      /*let params = new URLSearchParams();
      params.append("login", credentials.login);
      params.append("senha", credentials.password);

      let body = params.toString();

      this.http.post(LOGIN_URL, body, httpOptions).subscribe((data: any) => {
        /**Verificar se login foi bem sucedido */
        /*if (data.token) {
          //Cadastrar Dispositivo
          this.cadastrarDispositivo();

          this.storage.set(TOKEN_KEY, data.token).then(() => {
            this.authenticationState.next(true);
          });

          this.storage.set(CURRENT_USER, JSON.stringify(data)).then(() => {
            console.log("CURRENT USER=>", data);
          });

          observer.next(data);
          observer.complete();
        } else {
          observer.error(data);
          observer.complete();
        }
      });
    });*/
    /**For login test... */
    if (credentials.login === 'corestudio' && credentials.password === 'studio10'){

      this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
        this.authenticationState.next(true);
      });

      observer.next(true);
      observer.complete();

    }
    else{
      observer.error(false);
      observer.complete();
    }
  });
  }
 
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }
 
}