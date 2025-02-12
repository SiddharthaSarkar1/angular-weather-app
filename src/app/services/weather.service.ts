import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${environment.WeatherApiKey}`);
  }
}
