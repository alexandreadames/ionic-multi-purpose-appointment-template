import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: "app-schedules",
  templateUrl: "./schedules.page.html",
  styleUrls: ["./schedules.page.scss"]
})
export class SchedulesPage implements OnInit {
  idResource: any;
  schedules = [];
  days = [];
  dayActive: string = "";
  day_schedules = [];

  constructor(
    private thisRoute: ActivatedRoute,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.idResource = this.thisRoute.snapshot.paramMap.get("id_resource");
    console.log("Loading Schedules from resource=>", this.idResource);

    /*
    SET YOUR LOCALE HERE=>
    moment.locale("pt-br");
    */

    this.generateSchedules(30);
    this.generateDays();
  }

  generateSchedules(days) {
    let now = moment();
    let days_of_week = [1, 2, 3, 4, 5];

    for (let i = 0; i < days; i++) {
      if (days_of_week.includes(now.day())) {
        this.schedules.push({
          idResource: 1,
          date: now.format("YYYY-MM-DD"),
          start_hour: "08:00",
          end_hour: "09:00",
          day_of_week: now.day(),
          status: this.random(1, 4)
        });
        this.schedules.push({
          idResource: 1,
          date: now.format("YYYY-MM-DD"),
          start_hour: "09:00",
          end_hour: "10:00",
          day_of_week: now.day(),
          status: this.random(1, 4)
        });
        this.schedules.push({
          idResource: 1,
          date: now.format("YYYY-MM-DD"),
          start_hour: "10:00",
          end_hour: "11:00",
          day_of_week: now.day(),
          status: this.random(1, 4)
        });
        this.schedules.push({
          idResource: 1,
          date: now.format("YYYY-MM-DD"),
          start_hour: "12:00",
          end_hour: "13:00",
          day_of_week: now.day(),
          status: this.random(1, 4)
        });
      }

      now.add(1, "d");
    }

    console.log(this.schedules);
  }

  generateDays() {
    this.schedules.forEach(sch => {
      let now = moment(sch.date);

      let flag;

      this.days.filter(d => {
        if (d.date == sch.date) {
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

  checkDay(day: any) {
    this.dayActive = this.getStrDay(day);

    this.day_schedules = this.schedules.filter(sch => {
      return sch.date === day.date;
    });

    console.log(this.day_schedules);
  }

  async presentScheduleConfirm(ds) {
    const alert = await this.alertCtrl.create({
      header: "Class Scheduling",
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
            console.log("Scheduled=>", ds);
          }
        }
      ]
    });

    await alert.present();
  }

  random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
