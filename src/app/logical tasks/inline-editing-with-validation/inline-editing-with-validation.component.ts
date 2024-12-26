import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-editing-with-validation',
  templateUrl: './inline-editing-with-validation.component.html',
  styleUrls: ['./inline-editing-with-validation.component.css']
})
export class InlineEditingWithValidationComponent implements OnInit {

  userArray :any[]=[]

  constructor(private http:HttpClient) { }

  loadUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userArray = res;

    })
  }
  onEdit(userObj:any){
    userObj.isEdit = true
  }
  validator(item:any){
    if(item !== ''){
      return false
    }else{
      return true
    }

  }
  validateForm(obj:any){
    if(obj.name != ''&& obj.username != '' && obj.email != '' && obj.phone !=''){
      return false
    }else{
      return true
    }

  }
  validatorUserName(userName : string){
if(userName === ''){
  return "Required"
}else{

  if(userName.length > 3) {
    return "";
  }else{
    return "min 3 char"
  }
}
  }
  onCancel(item:any){
   item.isEdit = false;
  }

  ngOnInit(): void {
    this.loadUsers()
  }

}
