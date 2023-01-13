import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
childDataReceived:string="";
// Ename:string="John Smith";
// EObj={
//   ECode:1001,
//   EName:'Arun',
//   ESalary:80000
// }

constructor() {}
  
ngOnInit(): void {
}
ReceiveData(event:string){
  this.childDataReceived=event;
}
}
