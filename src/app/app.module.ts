import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientEntryComponent } from './patient-entry/patient-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { Routes, RouterModule } from '@angular/router';
import { PatientDisplayComponent } from './patient-display/patient-display.component';

const myRoute:Routes = [
  {
    path : "",
    component:PatientEntryComponent
  },
  {
    path:"search",
    component:PatientSearchComponent
  },
  {
    path:"delete",
    component:PatientDeleteComponent
  },
  {
    path:"view",
    component:PatientDisplayComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PatientEntryComponent,
    PatientSearchComponent,
    PatientDeleteComponent,
    PatientDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
