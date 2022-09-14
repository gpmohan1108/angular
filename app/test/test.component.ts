import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  movie_list :any[]= ["beast","the_legend","gulu-gulu","kaathuvakula-rendu-kadhal","vikram","varisu","vivegam"];
 
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
