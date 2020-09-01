import { WeatherService } from './weather.service';
import { Component, OnInit} from '@angular/core';
import { IWeather } from './current-weather';


@Component({
    selector: 'wr-weather',
    templateUrl: './current-weather.component.html',
    providers : [WeatherService]
})

export class CurrentWeatherComponent implements OnInit {

    constructor(private weatherService : WeatherService ){}
    errorMessage = '';
    weather: IWeather;
    ngOnInit(): void {
        this.weatherService.getWeather().subscribe({
        next: weather => this.weather = weather,
        error: err => this.errorMessage = err
        })
    }
    
}
