import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  city: string;
  temp: number;
  desc: string;
  day=[];
  max=[];
  min=[];
  icon=[];
  
  
 
  @Input() latitude: string;
  @Input() longitude: string;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
           
  }
  ngOnChanges() {
    let url = 'http://api.openweathermap.org/data/2.5/weather?'
            + 'lat=' + this.latitude
            + '&lon=' + this.longitude
            + '&units=metric'
            + '&lang=en'
            + '&appid=c2cbf3fd63cbedaffae7aba0868721da'; // your api key here

    let url1= 'http://api.openweathermap.org/data/2.5/forecast?'
            + 'lat=' + this.latitude
            + '&lon=' + this.longitude
            + '&units=metric'
            + '&lang=en'
            + '&appid=c2cbf3fd63cbedaffae7aba0868721da'; // your api key here

      this.http.get(url).subscribe((data: any) => {
        console.log(data);
        this.city = data.name;
        this.temp = data.main.temp.toFixed(1);
        this.max[0] = data.main.temp_max;
        this.min[0] = data.main.temp_min;
        this.desc = data.weather[0].description;
        this.icon[0] = data.weather[0].icon;
      });

      this.http.get(url1).subscribe((data: any) => {
        console.log(data);
        this.day[0] = data.list[1].dt_txt;
        this.day[1] = data.list[9].dt_txt;
        this.day[2] = data.list[17].dt_txt;
        this.day[3] = data.list[25].dt_txt;
        this.day[4] = data.list[33].dt_txt;
        this.max[1] = data.list[1].main.temp_max;
        this.min[1] = data.list[1].main.temp_min;
        this.max[2] = data.list[9].main.temp_max;
        this.min[2] = data.list[9].main.temp_min;
        this.max[3] = data.list[17].main.temp_max;
        this.min[3] = data.list[17].main.temp_min;
        this.max[4] = data.list[25].main.temp_max;
        this.min[4] = data.list[25].main.temp_min;
        this.max[5] = data.list[33].main.temp_max;
        this.min[5] = data.list[33].main.temp_min;
        this.icon[1] = data.list[1].weather[0].icon;
        this.icon[2] = data.list[9].weather[0].icon;
        this.icon[3] = data.list[17].weather[0].icon;
        this.icon[4] = data.list[25].weather[0].icon;
        this.icon[5] = data.list[33].weather[0].icon;
      });
    }

}
