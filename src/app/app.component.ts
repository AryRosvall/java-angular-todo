import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { LogoutComponent } from './logout/logout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, WelcomeComponent, LoginComponent, FooterComponent, MenuComponent, LogoutComponent]
})
export class AppComponent {
  title = 'todo';
  message = 'holi';
}
