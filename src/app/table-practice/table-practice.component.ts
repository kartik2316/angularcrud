import { Component, OnInit } from '@angular/core';
import data from './data.json';
@Component({
  selector: 'app-table-practice',
  templateUrl: './table-practice.component.html',
  styleUrls: ['./table-practice.component.scss']
})
export class TablePracticeComponent implements OnInit {
// jsonobj:JSON;
color="red";

col=["red","black"];

  
 
  constructor() {
    // this.jsonobj=<JSON>this.arrayObj;
    // console.log(this.jsonobj);
  
   }


  ngOnInit(): void {
    
  }
  arrayObj:students[]=data; 
  

  sid:number;
  sname:string;
 semail:string;
sgender:string;
getid(val:number|null,type:"sid") {
  this.sid=val;
}
getname(val:string) {
this.sname=val;
}
getemail(val:string) {
this.semail=val;
}
getgender(val:string) {
  this.sgender=val;
}

addstudent() {
  const newdata={  
    "id": this.sid,  
    "name": this.sname,  
    "email": this.semail,  
    "gender": this.sgender  
  }
this.arrayObj.push(newdata);
this.sid=+"";
this.semail="";
this.sgender="";
this.sname="";


}

}

class students{
  id:number;
  name:string;
  email:string;
  gender:string;
}