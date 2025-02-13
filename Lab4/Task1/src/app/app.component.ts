import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    @for (os of operatingSystems; track os.id) {
      {{ os.name }}
    }
  `,
  styles: `
  :host {
    color: #a144eb;
  }`,
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task1';
  city = 'San Francisco';
}