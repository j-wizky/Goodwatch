import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private myRouter: Router) {}

  login(){
    console.log("hola")
    this.myRouter.navigate(['/login'])
  }

  signup(){
    console.log("entra")
    this.myRouter.navigate(['/login/new'])
  }
}
