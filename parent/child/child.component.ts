import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  // @Input() EmployeeName!: string;
  // @Input() EmployeeObject!: any;
  childData:string="Data from Child Component";
  @Output() childStringData:EventEmitter<string>=new EventEmitter();
  
  constructor() {}
  
  ngOnInit(): void {
    // console.log("Data from Child"+JSON.stringify(this.EmployeeObject));
  }
  
  sendData(){
this.childStringData.emit(this.childData);
  }
}
