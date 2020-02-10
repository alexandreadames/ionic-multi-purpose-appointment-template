import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {
  resources = [
    {
      id: 1,
      resource_type: 'Aula',
      name: 'Aula de Pilates',
      teacher: 'Prof. Selma',
      image: `https://i.picsum.photos/id/${this.random(
        1,
        50,
      )}/200/200.jpg`,
    },
    {
      id: 2,
      resource_type: 'Aula',
      name: 'Aula de Yoga',
      teacher: 'Prof. Leandro',
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
