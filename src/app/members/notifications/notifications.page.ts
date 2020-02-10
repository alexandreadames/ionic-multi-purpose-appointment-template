import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"]
})
export class NotificationsPage implements OnInit {
  notifications = [
    {
      id: 1,
      name: "Teacher Selma",
      date: "31/01/2020",
      text:
        "It is my duty to announce... that there is no dessert here tonight.",
      image: `https://i.picsum.photos/id/497/200/200.jpg`
    },
    {
      id: 2,
      name: "Teacher Leandro",
      date: "31/01/2020",
      text: "There's no yoga class today",
      image: `https://i.picsum.photos/id/447/200/200.jpg`
    }
  ];

  constructor() {}

  ngOnInit() {}

  random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
