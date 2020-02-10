import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications = [
    {
      id: 1,
      name: 'Prof. Selma',
      date: '31/01/2020',
      text: 'Não haverá aula dia 04/02',
      image: `https://i.picsum.photos/id/${this.random(
        1,
        50,
      )}/200/200.jpg`,
    },
    {
      id: 2,
      name: 'Prof. Leandro',
      date: '31/01/2020',
      text: 'Não haverá aula dia 13/02',
      image: `https://i.picsum.photos/id/${this.random(
        1,
        50,
      )}/200/200.jpg`,
    },
  ];

  constructor() {}

  ngOnInit() {}

  random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
