import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaysDetailsComponent } from './pays-details/pays-details.component';
import { PaysComponent } from './pays/pays.component';

const routes: Routes = [
    { path:'',component: PaysComponent  },
    { path:'pays-details/:id',component: PaysDetailsComponent },
    { path: '**',component: PaysComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
