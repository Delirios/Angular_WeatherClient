import { WeatherService } from './../services/weather.service'
import { Component, OnInit} from '@angular/core';
import { IRoot } from './../models/current-weather';
import { _MatTabNavBase } from '@angular/material/tabs';


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
            .subscribe((data : IRoot) => this.current_location_weather = 
            {
                name: (data as any).name,
                main : (data as any ).main,
                wind : (data as any).wind,
                sys: (data as any).sys,
                weather: (data  as any).weather
                
            })

            });
    }
   
    constructor(private weatherService : WeatherService ){}
    current_weather: IRoot;
    current_location_weather : IRoot
    
    lon : number;
    lat : number;
    desc : string;
    cityName:string;
    weather : any [];
    errorMessage = '';

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

