import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,AbstractControlOptions} from '@angular/forms';
import {rangeValidator,emailMatchValidator} from '../my-validator';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup: FormGroup;
   empRecord: any ={
     firstname: 'subash',
     lastname: 'somasundaram',
     email: 'subash17062001@gmail.com',
     mobile: '8754989767'
   }
  //formOptions: AbstractControlOptions = {validators: emailMatchValidator}; 
  constructor(private fb: FormBuilder) {
    this.employeeFormGroup = this.fb.group({
      firstname: ['',[Validators.required,Validators.minLength(3)]],
      lastname: '',
      emailGroup: this.fb.group({
        email: ['',[Validators.required,Validators.email]],
        confirmEmail:['',[Validators.required,Validators.email]],
      }, {validators: emailMatchValidator}),
      mobile: [''],
      sendNotification: ['email'],
      range:['',[rangeValidator(10,20)]]
    });
   }

  ngOnInit(): void {
    
  }
  /**
   * ! is non-null asseration operator (pass-fix expression)
   * - it just saying to type checker that you're sure that a is not null or undefined.
   * the operation 'a!' produces a value of the type of 'a' with null and undefined excluded.
   * if 'a' is of string then 'a!' ensure that it will return a string value, and not NULL or UNDEFINED. 
   */
  get firstname() {return this.employeeFormGroup.get('firstname')!;}
  get range() {return this.employeeFormGroup.get('range')!;}
  get email() {return this.employeeFormGroup.get('email')!;}
  get emailGroup() { return this.employeeFormGroup.get('emailGroup')!;}
  get mobile() { return this.employeeFormGroup.get('mobile')!;}
  
  loadEmployee() {
    let data= {
    firstname: 'subash',
    lastname: 'somasundaram',
    email: 'adcd@gmail.com',
    mobile: '8754989767',
    range: '20'
    }
    this.employeeFormGroup.patchValue(data);
  }


  doNotification(msgtype: any) {
    if(msgtype == 'sms'){
      let mobileControl = this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([Validators.required,rangeValidator(6000000000,9999999999)]);
      mobileControl?.updateValueAndValidity();
    }
  }
}
