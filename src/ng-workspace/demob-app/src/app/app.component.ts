import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demob-app';
  location = 'Theni';
  total: number = 1000;
  onBoxValueChange(paramData: any)
  {
    console.log("app component: " + paramData.value);
  }
}
