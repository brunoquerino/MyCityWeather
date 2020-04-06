
import { Component, OnInit } from "@angular/core";
import { SearchService } from "./search.service";
import { Weather } from '../weather';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'search',
    templateUrl: './search.component.html'

})
export class SearchComponent implements OnInit{
    ngOnInit(): void {
        
    }
    errorMessage: string;
    weatherForecastData: any;
    disabledForecastButton: boolean;
    cityName: string;
    weather: Weather;

    constructor(private searchService:SearchService) {
        
        console.log(searchService);
    }


    onSubmitDatabinding(value: string) {
        let self = this;
        console.log(this.searchService);
        this.cityName = value;
      this.searchService.searchEntries(this.cityName).toPromise().then(function(data){
          self.weather = new Weather(data); 
      },function(error){console.log(error)});
        console.log('Inside the two way', this.cityName);

    }

    onResetControls(value: string) {
        this.cityName = '';
        this.disabledForecastButton = true;
        
    }



}