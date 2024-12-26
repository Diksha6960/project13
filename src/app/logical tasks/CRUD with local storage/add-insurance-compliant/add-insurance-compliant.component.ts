import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-insurance-compliant',
  templateUrl: './add-insurance-compliant.component.html',
  styleUrls: ['./add-insurance-compliant.component.css']
})
export class AddInsuranceCompliantComponent implements OnInit {
conplaintArray : any[]=[]
  constructor() { }
  complaintObj : any ={
    id : 0,
    complaintAgainst : '',
    firstName : '',
    lastName : '',
    address : '',
    city : '',
    state : '',
    phone : '',
    email : '',
    complaint :'',
  }
  resister(){
    debugger
    const localData = localStorage.getItem('complaintList');
    if(localData == null){
      this.conplaintArray.push(this.complaintObj)
      localStorage.setItem("complaintList",JSON.stringify(this.conplaintArray))
    }else{
      const parseData = JSON.parse(localData);
      this.complaintObj.id = parseData.length + 1;
      this.conplaintArray.push(this.complaintObj);
      localStorage.setItem("complaintList",JSON.stringify(this.conplaintArray))
    }
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('complaintList');
    if(localData !== null ){
      this.conplaintArray = JSON.parse(localData)
    }
  }


}
