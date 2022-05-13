import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>hello{{name}}</h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'binding';
  n:number=10;//member variable
  place="Enter your name";
  dis:boolean=false;
  name:string="Nithiya";
  name1:string="Hello"
  fun(){
    return "hello"
  }
  welcome()
  {
    alert ("WELCOME");
  }
}
