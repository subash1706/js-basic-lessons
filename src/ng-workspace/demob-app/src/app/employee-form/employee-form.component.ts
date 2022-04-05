import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { range } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeFormGroup = this.fb.group({
      firstname: ['',[Validators.required,Validators.minLength(3)]],
      lastname: '',
      emailGroup: this.fb.group({
        email: ['',[Validators.required,Validators.email]],
        confirmEmail:['',[Validators.required,Validators.email]]
      }),
      mobile: [''],
      sendNotification: ['email'],
      range:['',[]]
    });
   }

  ngOnInit(): void {
    
  }

}
