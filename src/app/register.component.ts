import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'register-component',
    templateUrl: 'register1.component.html'
})

export class RegisterComponent{
    onSubmit(){
      console.log(this.userForm.value);
    }
    userForm = new FormGroup({
      name: new FormControl("KimJuYong",[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl()
      }),
      pswd: new FormControl()
    });

}
