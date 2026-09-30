import { Component } from '@angular/core';
import { GreetComponent } from './greet/greet';

@Component({
  selector: 'app-root',
  imports: [GreetComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}