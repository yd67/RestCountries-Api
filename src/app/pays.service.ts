import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor( private httpClient :HttpClient) { }
  
  pays:any;

  // url ='https://restcountries.eu/rest/v2/all';

  // getALLPays(){
  //   this.httpClient.get<any>(this.url)
  //           .subscribe(response => {
  //               this.pays = response;
  //               // @TODO: this.bookList = ...
  //               console.log(this.pays)

  //           });
  // }
}
