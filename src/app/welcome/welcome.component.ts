import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  name=''
  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
   this.name =this.route.snapshot.params['name']
    
    
  }
}
