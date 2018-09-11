import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Omar Nizam";
  public successClass = "text-success";
  public hasError = false;
  public highlightcolor = "orange";

 //  public isSpecial = true;
 //  public messageClasses = {
 //   "text-success": !this.hasError,
 //   "text-danger": this.hasError,
 //   "text-special": this.isSpecial
 // };

 public titleStyles = {
   color: "blue",
   fontStyle: "italic"
 };

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hi " + this.name;
  }

}
