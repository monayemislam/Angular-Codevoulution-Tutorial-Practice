import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1,"name":"Tamal","age":26},
      {"id":1,"name":"Nafi","age":20},
      {"id":1,"name":"Nawsin","age":26}
    ]
  }

}
