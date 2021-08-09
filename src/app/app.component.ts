import { Component } from '@angular/core';
import {CoronaService} from "./services/corona.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19';
  constructor(private corona:CoronaService){}

  countries:any;
  country:any;
  Confirmed!: number;
  Recovered!: number;
  Death!: number;

  getCoronaData(){
    this.corona.getCoronaRealtimeData(this.country).subscribe((data)=>{
      console.log(data)
      var index = data.length - 1;
      this.Confirmed = data[index].Confirmed
      this.Death = data[index].Deaths
      this.Recovered = this.Confirmed - this.Death
      
    })
  }
  getCountry(country:any){
    this.country = country
  }

  ngOnInit(){
    this.corona.getCountries().subscribe((data)=>{
      console.log(data);
      this.countries = data;
    })
  }
}
