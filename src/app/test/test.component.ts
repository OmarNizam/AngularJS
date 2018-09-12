import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Omar Nizam";
/* The app-Component is the parent and the test-component is the child component and the interact with each other
They send data to each other:
From the parent to child though @input
From the chidld to the parent @output
*/
  @Input() public parentData;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hi " + this.name;
  }


}
