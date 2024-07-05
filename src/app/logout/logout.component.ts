import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService){}

  ngOnInit(): void {
    this.hardcodedAuthenticationService.logout()
  }

}
