import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  first_name: string = '';
  last_name: string = '';
  
  
  showDetails(first_name:string,last_name:string) {
    this.first_name = first_name;
    this.last_name = last_name;
    
}
  constructor() { }

  ngOnInit(): void {
  }

}
