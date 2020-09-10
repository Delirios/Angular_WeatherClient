import { IRoot } from './../models/current-weather';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import{catchError, tap} from 'rxjs/operators'


@Injectable({
    providedIn: 'root'
})

export class WeatherService{
    
    //private weatherUrl = 'assets/weather/weather.json';;

    private  weatherUrl = 'https://weatherservicewebapi.azurewebsites.net/api/Weather/';

    current_weather : IRoot
    constructor(private http: HttpClient){}

    getWeather(cityName :string) : Observable<IRoot>
    {
        return this.http.get<IRoot>(`https://weatherservicewebapi.azurewebsites.net/api/Weather/${cityName}`).pipe(
            tap(data => console.log('All' + JSON.stringify(data))),
            catchError(this.handleError)
            );
    }

    getWeatherByLocation(lon : number, lat : number) : Observable<IRoot>{
        return this.http.get<IRoot>(`https://weatherservicewebapi.azurewebsites.net/api/Weather/${lon}/${lat}`).pipe(
            tap(data => console.log('All' + JSON.stringify(data))),
            catchError(this.handleError)
            );
    }


    getLocation(): Promise<any>
    {
      return new Promise((resolve, reject) => {
  
        navigator.geolocation.getCurrentPosition(resp => {
  
            resolve({lon: resp.coords.longitude, lat: resp.coords.latitude});
          },
          err => {
            reject(err);
          });
      });
    }
    

    private handleError(err: HttpErrorResponse)
    {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent)
        {
            errorMessage = `An error ocured: ${err.error.message}`
        }
        else
        {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}