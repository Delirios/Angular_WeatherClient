import { WeatherService } from './../services/weather.service'
import { Component, OnInit} from '@angular/core';
import { IRoot } from './../models/current-weather';
import { _MatTabNavBase } from '@angular/material/tabs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable, of } from 'rxjs';


@Component({
    selector: 'wr-weather',
    templateUrl: './current-weather.component.html',
    providers : [WeatherService],
    styleUrls: ['./current-weather.component.scss']
})

export class CurrentWeatherComponent implements OnInit{

    ngOnInit() {
        this.weatherService.getLocation().then(pos => 
            {
            this.lon = pos.lon;
            this.lat = pos.lat;
            this.weatherService.getWeatherByLocation(this.lat, this.lon)
            .subscribe((data : IRoot) => this.current_weather = 
            {
                name: (data as any).name,
                main : (data as any ).main,
                wind : (data as any).wind,
                sys: (data as any).sys,
                weather: (data  as any).weather
            })
            });
    }
    lon : number;
    lat : number;

    cityName:string;
    weather : any [];

    constructor(private weatherService : WeatherService ){

    }
    errorMessage = '';
    current_weather: IRoot;
    Show(){
        console.log(this.current_weather.main.humidity)
}

    ShowWeather(cityName){
        this.weatherService.getWeather(this.cityName)
        .subscribe((data : IRoot) => this.current_weather = {
            name: (data as any).name,
            main : (data as any ).main,
            wind : (data as any).wind,
            sys: (data as any).sys,
            weather: (data  as any).weather
        });

    }
    position : any;
}

