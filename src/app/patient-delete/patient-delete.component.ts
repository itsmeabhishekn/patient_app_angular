import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent {
id =""

readValues = ()=>
{
  let data ={"id":this.id}
  console.log(data)
}

}
