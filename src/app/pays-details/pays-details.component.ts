import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pays-details',
  templateUrl: './pays-details.component.html',
  styleUrls: ['./pays-details.component.css']
})
export class PaysDetailsComponent implements OnInit {

   paysDetails:any
   border:any ;
   
  constructor( 
    private http:HttpClient,
    private route:ActivatedRoute,
    private location:Location) { }


    voisin(b){
      let border = b
      this.http.get<any>('https://restcountries.eu/rest/v2/alpha/'+border)
      .subscribe(response => {
          this.paysDetails = response;
          this.border = response.borders
        });  
    }

  ngOnInit(): void {
    const code = this.route.snapshot.params["id"];
    this.http.get<any>('https://restcountries.eu/rest/v2/alpha/'+code)
        .subscribe(response => {
            this.paysDetails = response;
            this.border = response.borders
          });  
  }
  
  goBack(){
    this.location.back();
  }


}
