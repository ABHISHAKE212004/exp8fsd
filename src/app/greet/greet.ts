import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.html',
  styleUrl: './greet.css'
})
export class GreetComponent {

  Name: string = 'Abhi';
  Branch: string = 'CSE';
  Mobile: number = 24589;
  Gender: string = 'Male';
  Age: number = 21;

}