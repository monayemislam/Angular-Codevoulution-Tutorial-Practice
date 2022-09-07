import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees:any=[];
  public errorMsg:any;
  constructor(private _employeeDetails : EmployeeService) { }

  ngOnInit(): void {
    this._employeeDetails.getEmployees().subscribe((data)=>
      this.employees=data,
      error=>this.errorMsg=error
      );
  }

}
