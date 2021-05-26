import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Amigos', url: '/amigos/', icon: 'people' },
    { title: 'Viagens', url: '/viagens/', icon: 'car' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
