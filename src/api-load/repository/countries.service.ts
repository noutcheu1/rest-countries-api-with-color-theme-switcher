import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CountryData } from '../interface/countries';
import { Country } from '../model/countries';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  baseurl:string = './assets/data.json';
  constructor(private http: HttpClient) { }

  getcountries(): Observable<Country[]>{
    return this.http.get<Country[]>(this.baseurl);
  }


 
}

