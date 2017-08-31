import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'second-component',
    template : `<h2>Child Tutorials Component</h2>
                <label>Enter Child SecondComponent Value </label>
                <input type = 'text' #childData (keyup) = "onChange(childData.value)">
                <p>Value From Parent AppComponent is {{ parentData }}</p>
              `,
    inputs: [`parentData`],
    outputs: ['childEvent']
})

export class SecondComponent{

    parentData: string;
    childEvent = new EventEmitter<string>();

    onChange(value:string){
      this.childEvent.emit(value);
    }
}
