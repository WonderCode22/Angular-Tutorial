import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!--<h1>Here is app.component</h1>
             <my-tutorials [parentData]="ptext.value"></my-tutorials>
             <second-component (childEvent)="childData = $event" [parentData]="ptext.value"></second-component>
             <input type = 'text' [placeholder]="placeHolder">
              <br/>
             <h2>Parent App Component</h2>
             <label>Enter Parent AppComponent Value</label>
             <input type="text" #ptext (keyup)="0">
             <p>Value From Child SecondComponent is {{ childData }}</p>

             <div>
                <p>Pipe Component</p>
                <pipe-component></pipe-component>
             </div>
            -->
            <div class="row flex-center pt-5 mt-3">
                <div class="col-md-6 text-center text-md-left mb-5">
                    <div class="white-text">
                        <h1 class="h1-responsive font-bold wow fadeInLeft" data-wow-delay="0.3s">Sign up right now! </h1>
                        <hr class="hr-light wow fadeInLeft" data-wow-delay="0.3s">
                        <h6 class="wow fadeInLeft" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, quisquam iste, maiores. Nulla.</h6>
                        <br>
                        <a class="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Learn more</a>
                        <button class="btn btn-default" (click)="onRegister()">Register</button>
                    </div>
                </div>

                <div class="col-md-6 col-xl-5 offset-xl-1">
                    <register-component [hidden]="registerFlag"></register-component>
                </div>
            </div>


            `
})

export class AppComponent {
  public registerFlag = true;
  title = 'app works!';
  public placeHolder = "Input your name!";
  public childData: string;

  onRegister(){
    this.registerFlag = false;
  }
}
