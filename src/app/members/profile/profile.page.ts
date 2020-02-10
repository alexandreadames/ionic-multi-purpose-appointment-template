import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  profile: any;

  constructor() {}

  async ngOnInit() {
    await this.loadProfile();
  }

  async loadProfile() {
    this.profile = {
      photo: "https://i.picsum.photos/id/1027/200/200.jpg",
      name: "Roksolana Zasiadko",
      email: "roksolana@email.com",
      phone_number: "(99) 99009-0068"
    };
  }
}
