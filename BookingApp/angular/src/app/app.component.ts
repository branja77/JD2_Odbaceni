import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ime = 'Branko';
  prezime = 'Savic';
  voce = [
    {"naziv": "jabuka", "boja":"zelena"},
    {"naziv": "kruska", "boja":"ljubicasta"},
    {"naziv": "jagoda", "boja":"crvena"}
  ]
}
