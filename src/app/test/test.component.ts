import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Omar Nizam";
  public displayName = false;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hi " + this.name;
  }

  onClick(event) {
    // console.log('Omar you clicked the Button !!');
    console.log(event);
    this.greeting = this.name + ' you clicked the Button !!';
    // this.greeting = event.type;
  }

  logMessage(value) {
    console.log(value);
  }

}
