import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
submitted = false;
  myform: FormGroup = new FormGroup({field1: new FormControl('', Validators.required),
  ipAddress: new FormControl('',  [
    Validators.required, 
    Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')
  ])});
 
  constructor(private formBuilder: FormBuilder,private route: Router) {}

  ngOnInit(): void {

   
    }

    get f(): { [key: string]: AbstractControl } {
      return this.myform.controls;
    }

    onSubmit(): void {debugger;
      this.submitted = true;
     
      if (this.myform.invalid) {
        return;
      }
  
      this.route.navigate(['wss-data-output', {data1: this.myform.value.field1, data2: this.myform.value.ipAddress}]);
    }
  
        
 

}
