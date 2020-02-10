import {
  ModalController,
  NavController,
  AlertController
} from "@ionic/angular";
import { AuthenticationService } from "./../../services/authentication.service";
import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  slideOpts: any;
  noticias: any;
  turmasMatriculadas: any;
  atividadesTurmasMatriculadas: any;
  proximasAvaliacoes: any;
  currentUser: any;

  days = [];
  dayActive: string = "";

  appointments = [
    {
      date: "2020-01-30",
      schedule: {
        id: 2,
        day_of_week: 4,
        start_hour: "07:00",
        end_hour: "08:00",
        resource: {
          professional: "Teacher Selma",
          name: "Pilates class"
        }
      }
    },
    {
      date: "2020-02-04",
      schedule: {
        id: 1,
        day_of_week: 2,
        start_hour: "07:00",
        end_hour: "08:00",
        resource: {
          professional: "Teacher Selma",
          name: "Pilates class"
        }
      }
    },
    {
      date: "2020-02-04",
      schedule: {
        id: 1,
        day_of_week: 2,
        start_hour: "09:00",
        end_hour: "10:00",
        resource: {
          professional: "Teacher Leandro",
          name: "Yoga class"
        }
      }
    },
    {
      date: "2020-02-04",
      schedule: {
        id: 1,
        day_of_week: 2,
        start_hour: "15:00",
        end_hour: "14:00",
        resource: {
          professional: "Teacher Leandro",
          name: "Yoga class"
        }
      }
    },
    {
      date: "2020-02-06",
      schedule: {
        id: 1,
        day_of_week: 4,
        start_hour: "07:00",
        end_hour: "08:00",
        resource: {
          professional: "Teacher Selma",
          name: "Pilates class"
        }
      },
      cancelled: true
    },
    {
      date: "2020-02-11",
      schedule: {
        id: 1,
        day_of_week: 2,
        start_hour: "07:00",
        end_hour: "08:00",
        resource: {
          professional: "Teacher Selma",
          name: "Pilates class"
        }
      }
    },
    {
      date: "2020-02-13",
      schedule: {
        id: 1,
        day_of_week: 2,
        start_hour: "07:00",
        end_hour: "08:00",
        resource: {
          professional: "Teacher Selma",
          name: "Pilates class"
        }
      }
    }
  ];

  day_appointments = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private modalController: ModalController,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    /*
    SET YOUR LOCALE HERE=>
    moment.locale("pt-br");
    */
    this.generateDays();
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

  checkDay(day: any) {
    this.dayActive = this.getStrDay(day);

    this.day_appointments = this.appointments.filter(ap => {
      return ap.date === day.date;
    });

    console.log(this.day_appointments);
  }

  generateDays() {
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
          month: now.format("MMM"),
          day: now.format("DD"),
          dayname: now.format("ddd"),
          date: now.format("YYYY-MM-DD")
        });
      }
    });

    this.checkDay(this.days[0]);
  }

  getStrDay(day: any) {
    return `${day.month}-${day.day}-${day.dayname}`;
  }

  next() {
    this.navCtrl.navigateForward("pick-service");
  }

  async presentCancelConfirm(day_appointment) {
    const alert = await this.alertCtrl.create({
      header: "Appointment Cancel",
      message: "Are you sure?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Cancelled");
          }
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Cancelled=>", day_appointment);
          }
        }
      ]
    });

    await alert.present();
  }
}
