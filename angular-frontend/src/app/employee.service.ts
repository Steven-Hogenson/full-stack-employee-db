import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseURL);
    // return this.http.get('http://localhost:8080/api/v1/employees');
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.http.post(this.baseURL, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseURL}/${id}`);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
