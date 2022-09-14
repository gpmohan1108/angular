import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first_name: string = '';
  last_name: string = '';
  date_of_joining !: Date;

  
  
  showDetails(first_name:string,last_name:string,doj:Date) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.date_of_joining = doj;
    
}


}