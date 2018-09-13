import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Omar Nizam";
  public message = "welcome to codevolution";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  };
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hi " + this.name;
  }


}
