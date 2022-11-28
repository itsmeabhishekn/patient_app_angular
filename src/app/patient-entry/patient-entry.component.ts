import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
name=""
id=""
adress=""
number=""
date=""
doctor=""

readValues= ()=>
{
  let data = {"name":this.name,"id":this.id,"adress":this.adress,"number":this.number,"date":this.date,"doctor":this.doctor}
  console.log(data)
}

}
