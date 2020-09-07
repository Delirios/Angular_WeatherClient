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

    private weatherUrl = 'https://weatherservicewebapi.azurewebsites.net/api/Weather/Lviv';

    constructor(private http: HttpClient){}

    getWeather() : Observable<IRoot>
    {
        return this.http.get<IRoot>(this.weatherUrl).pipe(
            tap(data => console.log('All' + JSON.stringify(data))),
            catchError(this.handleError)
            );
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