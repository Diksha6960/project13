import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-editing',
  templateUrl: './inline-editing.component.html',
  styleUrls: ['./inline-editing.component.css']
})
export class InlineEditingComponent implements OnInit {

loadUsers : any[]=[]
oldUserObj:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadAllUsers()
  }
   
  loadAllUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
this.loadUsers=res
    })
  }

 
  onEdit(userObj:any){
    this.oldUserObj = JSON.stringify(userObj)
    this.loadUsers.forEach(element => {
      element.isEdit = false
    });
     userObj.isEdit = true
  }
  onAdd(){
    const Obj = {
      "id": 1,
    "name": "",
    "username": "",
    "email": "",
    "phone": "",
    "website": "",
    "isEdit": true
    }
    this.loadUsers.unshift(Obj)
  }
  onUpdate(userObj:any)
  {
// write api call and send obj
  }
  onCancel(obj:any){
    const oldObj = JSON.parse(this.oldUserObj);
    obj.name = oldObj.name;
    obj.username = oldObj.username;
    obj.phone = oldObj.phone;
    obj.email = oldObj.email
    obj.isEdit = false

  }

}
