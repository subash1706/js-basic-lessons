import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  //data-mode

  customerModel: any;
  
  constructor() { }

  ngOnInit(): void {
    this.customerModel={
      firstName: 'steve',
      lastName: 'Jobs',
      email: 'steve.Jobs@googleplace.com'
    }
  }
  saveCustomer(CustomerFormGroup: any) {
    if (CustomerFormGroup.valid) {
      console.log(CustomerFormGroup.value);
    }
  }

}
