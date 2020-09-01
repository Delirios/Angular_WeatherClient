import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `<div><h1>{{title}}</h1>
                <wr-weather></wr-weather>
               
                </div>
                `
  
})
export class AppComponent {
  title = 'Angular-WeatherClient';
}
