import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [NgClass],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css',
})
export class PasswordInputComponent {
  passwordValue: string = '';
  passwordStrength: string = '';
  inputType: string = 'password';
  lightPassword = new RegExp(`^[a-zA-Z]+$|^\\d+$|^\\W+$`);
  midPassword = new RegExp(
    `^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]+$|^(?=.*[a-zA-Z])(?=.*\\W)[a-zA-Z\\W]+$|^(?=.*\\d)(?=.*\\W)[\\d\\W]+$`
  );
  strongPassword = new RegExp(
    `^(?=.*[a-zA-Z])(?=.*\\d)(?=.*\\W)[a-zA-Z\\d\\W]+$`
  );

  setPassword(event: Event): void {
    this.passwordValue = (event.target as HTMLTextAreaElement).value;

    if (this.passwordValue.length < 8 && this.passwordValue.length !== 0)
      this.passwordStrength = 'notEnoughChars';
    else if (this.passwordValue.match(this.lightPassword))
      this.passwordStrength = 'light';
    else if (this.passwordValue.match(new RegExp(this.midPassword)))
      this.passwordStrength = 'mid';
    else if (this.passwordValue.match(new RegExp(this.strongPassword)))
      this.passwordStrength = 'strong';
    else this.passwordStrength = '';
  }
  showPassword(): void {
    this.inputType === 'password'
      ? (this.inputType = 'text')
      : (this.inputType = 'password');
  }
}
