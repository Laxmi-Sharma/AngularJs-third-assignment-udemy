import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .online
  {
    color:white
  }
  `]
  
})
export class AppComponent {
  displayDetails:boolean=false;
  content:string ="Secret Password = tuna";
  buttonClicks=[];

  addNumbers(){
    this.displayDetails=!this.displayDetails;
    this.buttonClicks.push(new Date());
  }
}
