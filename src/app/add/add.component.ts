import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(private employeeService: EmployeeService){}

  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-employee-form')!.click();
    console.log(addForm);
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        console.log(addForm);
       // this.getEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert("");
        addForm.reset();
      }
    );
  }
  
}

