export class Weather {
    city: string;
    temp: string;
    temp_max: string;
    temp_min: string;
    date: Date;
    descr: string;
    windspeed: string;
    constructor(public data) {
            
        this.city = data.name;
        this.temp = Math.round(data.main.temp)+'';
        this.temp_max = data.main.temp_max;
        this.temp_min = data.main.temp_max;
        this.date = new Date(data.dt * 1000);
        this.descr = data.weather[0].description;
        this.windspeed = (data.wind.speed*3.6)+''; 

    }
    toString():string{
        return this.city+' - temp:'+this.temp+' temp_max='+this.temp_max+' temp_min='+this.temp_min;
    }
}
