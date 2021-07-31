import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { PaysService } from '../pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {

  pays:any;
  p: number = 1;
  selectedRegion= null;
  search:string ;
  
  urlAll='https://restcountries.eu/rest/v2/all'

  constructor(private paysService:PaysService, private http:HttpClient) { }

    filter(v) {
      this.selectedRegion = v ;
        if(this.selectedRegion != null  && this.selectedRegion != 'noError'){
            this.http.get<any>('https://restcountries.eu/rest/v2/region/'+this.selectedRegion)
            .subscribe(response => {
                this.pays = response;
              });
        }          
    }
    inputFilter(s){
      if(s.length >= 1 ){
        this.search = s ;
        this.http.get<any>('https://restcountries.eu/rest/v2/name/'+this.search)
        .subscribe(response => {
            this.pays = response;
          });
      }
    
  }

  ngOnInit(): void {  
    this.http.get<any>(this.urlAll)
          .subscribe(response => {
              this.pays = response;
          });
    }


}
