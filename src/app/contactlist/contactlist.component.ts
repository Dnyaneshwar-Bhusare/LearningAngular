import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent {


 jsondata:any;
 jsondatas:any;
sname:any;
 datam:any;
 mnumber:any;

  constructor (private http: HttpClient){

  }
  ContactList(){
      
      var url="http://localhost:8181/PhoneBookApi/app/Contacts";
      this.http.get(url).subscribe(data=>{

      this.jsondata=data;
      

           
  })


  }
  searchNumber(){
    var url="http://localhost:8181/PhoneBookApi/app/Contacts";
    this.http.get(url).subscribe(data=>{

    this.jsondatas=data;
    

for(var i of this.jsondatas){
    if(i.name==this.sname){
        this.mnumber=i.mobileNumber;
        return this.mnumber;
    }}
  })
  }

  sortByNumber(){
    
    var url="http://localhost:8181/PhoneBookApi/app/Contacts";
    this.http.get(url).subscribe(data=>{

    this.jsondatas=data;

    

  }



}
