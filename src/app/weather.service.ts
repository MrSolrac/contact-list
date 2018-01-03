import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'


@Injectable()
export class WeatherService {

  constructor(private http:Http) { }

  // searchCity(city:string): void {
  //   this.http.get(`${city}`).subscribe( (res: Response) => {
  //     const weatherCity = res.json();
  //     console.log(weatherCity);
  //   }

  // }

}
