import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { PasswordInputComponent } from './common-ui/password-input/password-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ProfileCardComponent, PasswordInputComponent],
})
export class AppComponent {
  title = 'my-app';
}
