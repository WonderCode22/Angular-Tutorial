import { Component } from '@angular/core';

@Component({
    selector: 'pipe-component',
    template: `<p>{{ name | uppercase}}</p>
                <p>{{ 22.22 | currency:'USD':true}}</p>
                <p>{{ date }}</p>
                <p>{{ date | date:'fullDate'}}</p>
                <p>{{ date | date:'shortDate'}}</p>
                <p>{{ date | date:'mediumTime'}}</p>
    `
})

export class PipeComponent{
    public name = "KimJuYong";
    public date = new Date();
}
