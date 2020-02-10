import {
  ModalController,
  NavController,
  AlertController,
} from '@ionic/angular';
import { AuthenticationService } from './../../services/authentication.service';
//import { HttpClient } from '@angular/common/http';
//import { API_URL } from "./../../../environments/environment";
import { Component, OnInit } from '@angular/core';
//import { LoadingBarService } from "@ngx-loading-bar/core";
import { NavigationExtras, Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core';
//import { DateService } from "src/app/services/date.service";
import * as moment from 'moment';

/*const NOTICIAS_URL = `${API_URL}noticias`;
const TURMAS_MATRICULADAS_URL = `${API_URL}turmas`;
const PROXIMAS_AVALIACOES_URL = `${API_URL}atividades/proximas`;*/

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts: any;
  noticias: any;
  turmasMatriculadas: any;
  atividadesTurmasMatriculadas: any;
  proximasAvaliacoes: any;
  currentUser: any;

  days = [];
  dayActive: string = '';

  appointments = [
    {
      date: '2020-01-30',
      schedule: {
        id: 2,
        day_of_week: 4,
        start_hour: '07:00',
        end_hour: '08:00',
        resource: {
          professional: 'Prof. Selma',
          name: 'Aula de Pilates',
        },
      },
    },
    {
      date: '2020-02-04',
      schedule: {
        id: 1,
        day_of_week: 2,
        start_hour: '07:00',
        end_hour: '08:00',
        resource: {
          professional: 'Prof. Selma',
          name: 'Aula de Pilates',
        },
      },
    },
    {
      date: '2020-02-04',
      schedule: {
        id: 1,
        day_of_week: 2,
        start_hour: '09:00',
        end_hour: '10:00',
        resource: {
          professional: 'Prof. Leandro',
          name: 'Aula de Yoga',
        },
      },
    },
    {
      date: '2020-02-04',
      schedule: {
        id: 1,
        day_of_week: 2,
        start_hour: '15:00',
        end_hour: '14:00',
        resource: {
          professional: 'Prof. Leandro',
          name: 'Aula de Yoga',
        },
      },
    },
    {
      date: '2020-02-06',
      schedule: {
        id: 1,
        day_of_week: 4,
        start_hour: '07:00',
        end_hour: '08:00',
        resource: {
          professional: 'Prof. Selma',
          name: 'Aula de Pilates',
        },
      },
      cancelled: true,
    },
    {
      date: '2020-02-11',
      schedule: {
        id: 1,
        day_of_week: 2,
        start_hour: '07:00',
        end_hour: '08:00',
        resource: {
          professional: 'Prof. Selma',
          name: 'Aula de Pilates',
        },
      },
    },
    {
      date: '2020-02-13',
      schedule: {
        id: 1,
        day_of_week: 2,
        start_hour: '07:00',
        end_hour: '08:00',
        resource: {
          professional: 'Prof. Selma',
          name: 'Aula de Pilates',
        },
      },
    },
  ];

  day_appointments = [];

  constructor(
    //private http: HttpClient,
    //private loadingBar: LoadingBarService,
    private authService: AuthenticationService,
    private router: Router,
    private modalController: ModalController, //private dateService: DateService
    private alertCtrl: AlertController,
    private navCtrl: NavController,
  ) {
    moment.locale('pt-br');
    this.generateDays();
  }

  ngOnInit() {
    //Carregar usuário para montar view
    /*this.authService.getCurrentUser().then(user => {
      this.currentUser = user;
      this.carregarNoticias();
    });*/

    this.slideOpts = {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay: true,
    };
  }

  /*carregarNoticias() {
    this.loadingBar.start();
    this.http.get<any>(NOTICIAS_URL).subscribe((data: any) => {
      this.noticias = data;
      this.loadingBar.complete();
      console.log("NOTÍCIAS=>", this.noticias);
      //Após carregar as notícias, carregar as turmas matriculadas se for discente...
      if (this.currentUser.tipo == 1) {
        this.carregarTurmasMatriculadas();
      }
    });
  }

  carregarTurmasMatriculadas() {
    this.loadingBar.start();
    this.http.get<any>(TURMAS_MATRICULADAS_URL).subscribe((data: any) => {
      this.turmasMatriculadas = data;
      this.loadingBar.complete();
      console.log("TURMAS MATRICULADAS=>", this.turmasMatriculadas);
      this.carregarAtividadesTurmas();
    });
  }

  carregarAtividadesTurmas() {
    this.loadingBar.start();
    this.http
      .get<any>(`${TURMAS_MATRICULADAS_URL}/atividades`)
      .subscribe((data: any) => {
        this.atividadesTurmasMatriculadas = data;
        this.loadingBar.complete();
        console.log(
          "ATIVIDADES DAS TURMAS MATRICULADAS=>",
          this.atividadesTurmasMatriculadas
        );
        this.carregarProximasAvaliacoes();
      });
  }

  carregarProximasAvaliacoes() {
    this.loadingBar.start();
    this.http.get<any>(`${PROXIMAS_AVALIACOES_URL}`).subscribe((data: any) => {
      this.proximasAvaliacoes = data;
      this.loadingBar.complete();
      console.log("PRÓXIMAS AVALIAÇÕES=>", this.proximasAvaliacoes);
    });
  }*/

  logout() {
    this.authService.logout();
  }

  openTurmaVirtual(turma) {
    let navigationExtras: NavigationExtras = {
      state: {
        turma: turma,
      },
    };
    this.router.navigate(['turma-virtual'], navigationExtras);
  }

  /*async openModalNoticia(noticia: any) {
    const modal: HTMLIonModalElement = await this.modalController.create(
      {
        component: ModalNoticiasComponent,
        componentProps: {
          noticia: noticia,
        },
      },
    );

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        console.log('The result:', detail.data);
      }
    });

    await modal.present();
  }*/

  getDataFormatada(date) {
    //return this.dateService.formatDateBR(date);
  }

  checkDay(day: any) {
    this.dayActive = this.getStrDay(day);

    this.day_appointments = this.appointments.filter(ap => {
      return ap.date === day.date;
    });

    console.log(this.day_appointments);
  }

  /*checkHour(hour: string) {
    this.hourActive = hour;
  }*/

  generateDays() {
    /*let now = moment();
    for (let i = 0; i < 14; i++) {
      now.add(1, 'd');

      this.days.push({
        month: now.format('MMM'),
        day: now.format('DD'),
        dayname: now.format('ddd'),
        date: now.format('YYYY-MM-DD'),
      });
    }

    this.checkDay(this.days[0]);
    */
    this.appointments.forEach(ap => {
      let now = moment(ap.date);

      let flag;

      this.days.filter(d => {
        if (d.date == ap.date) {
          flag = true;
        }
      });

      if (!flag) {
        this.days.push({
          month: now.format('MMM'),
          day: now.format('DD'),
          dayname: now.format('ddd'),
          date: now.format('YYYY-MM-DD'),
        });
      }
    });

    this.checkDay(this.days[0]);
  }

  getStrDay(day: any) {
    return `${day.month}-${day.day}-${day.dayname}`;
  }

  next() {
    this.navCtrl.navigateForward('pick-service');
  }

  async presentCancelConfirm(day_appointment) {
    const alert = await this.alertCtrl.create({
      header: 'Cancelamento de Aula',
      message: 'Deseja realmente cancelar essa aula?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelled');
          },
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Cancelled=>', day_appointment);
          },
        },
      ],
    });

    await alert.present();
  }
}
