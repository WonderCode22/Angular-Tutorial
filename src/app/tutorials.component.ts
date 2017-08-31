import { Component } from '@angular/core'

@Component({
    selector: 'my-tutorials',
    template: `<h2 [style.color] = "bkgColor? 'red' : 'white'">Welcome to Angular JS 2</h2>
              <button (click)="onClick(textValue.value)" class="btn btn-outline-success btn-rounded waves-effect">Handle Event</button>
              <input [hidden] = "!showElement" type = "text" [value] = "outputText" #textValue>
              <span [ngSwitch]="name">
                <p *ngSwitchCase="'kjy'">
                    KimJuYong
                </p>
                <p *ngSwitchCase="'yi'">
                    YunIl
                </p>
                <p *ngSwitchDefault>
                    anonymous
                </p>
              </span>
              <p *ngFor = "let color of colors" [ngClass]="{'font-color': fontColor, 'font-size':fontSize}">{{color}}</p>
              <p [ngStyle]="{'color': 'blue','font-size' : '25px'}">Which Color</p>

              <div>
                <h4 *ngIf="showName">Name : {{fName}}{{lName}} </h4>
                <br/>
                <input placeholder="First Name" [(ngModel)] = "fName" (keydown)="showName=true">
                <input placeholder="Last Name" [(ngModel)] = "lName">
              </div>
              <p>Parent Value is {{ parentData }}</p>

`,
    styles:[`h3{
        color: red;
    }
      .font-color{ color : red }
      .font-size{ font-size : 40px }
        `],
    inputs: [`parentData`]
})

export class TutorialsComponent{
    public parentData : string;
    public showName = false;
    public fName;
    public lName;
    public applyBlue = false;
    public bkgColor = true;
    public showElement = false;
    public outputText = "Tutorial in Angular JS 2";
    public name;
    public colors = ['red','green','blue'];
    public fontSize = false;
    public fontColor = true;
    onClick(value){
      console.log(value);
    }
}
