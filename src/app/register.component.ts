import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
    selector: 'register-component',
    templateUrl: 'register.component.html'
})

export class RegisterComponent{
    onSubmit(){
      console.log(this.userForm.value);
    }
    userForm = new FormGroup({
      name: new FormControl("KimJuYong"),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl()
      }),
      pswd: new FormControl()
    });

}
