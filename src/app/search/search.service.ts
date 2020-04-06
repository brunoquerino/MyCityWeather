
import { Injectable } from "@angular/core";
//import { Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable()
export class SearchService {
  
    constructor(private http: HttpClient) { 
       
    }

    searchEntries(term) {
            let production = false;
            let appId= '0ee4207a4d9b0cf6b3d9108586d9589d';
            let baseUrl= 'http://api.openweathermap.org/data/2.5/';
            let units= 'metric';
        return this.http.get(
            baseUrl +
            'weather?q=' + term +
            '&appid=' + appId +
            '&units=' + units
        );

    }
}