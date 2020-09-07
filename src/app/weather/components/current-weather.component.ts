import { WeatherService } from './../services/weather.service'
import { Component, OnInit} from '@angular/core';
import { IRoot } from './../models/current-weather';


@Component({
    selector: 'wr-weather',
    templateUrl: './current-weather.component.html',
    providers : [WeatherService]
})

export class CurrentWeatherComponent implements OnInit {

    constructor(private weatherService : WeatherService ){}
    errorMessage = '';
    current_weather: IRoot;
    ngOnInit(): void {
        this.weatherService.getWeather().subscribe({
        next: current_weather => this.current_weather = current_weather,
        error: err => this.errorMessage = err
        })
    }
    
}
