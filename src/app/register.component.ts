import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'register-component',
    templateUrl: 'register1.component.html'
})

export class RegisterComponent implements OnInit{
  /*
    onSubmit(){
      console.log(this.userForm.value);
    }
    userForm = new FormGroup({
      name: new FormControl("KimJuYong",[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      email: new FormControl([Validators.pattern]),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl()
      }),
      pswd: new FormControl()
    });
  */
  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder){
  }

  ngOnInit(){
    this.userForm = this._formBuilder.group({
      name: ["KimJuYong", [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: [],
      address: this._formBuilder.group({
        street: [],
        city: []
      }),
      pswd: []
    })
  }
}
