import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-compliant',
  templateUrl: './insurance-compliant.component.html',
  styleUrls: ['./insurance-compliant.component.css']
})
export class InsuranceCompliantComponent implements OnInit {

  conplaintArray : any[]=[]

  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem("complaintList");
    if(localData != null){
      this.conplaintArray = JSON.parse(localData)
    }
  }
  

}
