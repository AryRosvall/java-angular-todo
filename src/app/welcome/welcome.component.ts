import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { WelcomeDataService } from '../service/data/welcome-data.service';

export interface errorResponse {
  error: {
    message: string
  };
}
export interface successfulResponse {
  message: string
}
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromService = '';
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe({
      next: (response) => this.handleSuccessfulResponse(response),
      error: (error) => this.handleErrorResponse(error)
    }
    )
  }

  getWelcomeMessageWithParam() {
    this.service.executeHelloWorldWithParamBeanService(this.name).subscribe({
      next: (response) => this.handleSuccessfulResponse(response),
      error: (error) => this.handleErrorResponse(error)
    }
    )
  }

  handleSuccessfulResponse(response: successfulResponse) {
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error: errorResponse) {
    console.log(error)
    this.welcomeMessageFromService = error.error.message

  }
}
