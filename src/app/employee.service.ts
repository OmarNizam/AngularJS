import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id": 1, "name": "Andrew", "age": 30},
      {"id": 2, "name": "Bas", "age": 25},
      {"id": 3, "name": "Melivn", "age": 26},
      {"id": 4, "name": "Peter", "age": 28},
    ];
  }
}
