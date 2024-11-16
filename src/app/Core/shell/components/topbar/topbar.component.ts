import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private myRouter: Router) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              command: () => this.myRouter.navigate(["/home"])
          },
          {
              label: 'Buscar',
              icon: 'pi pi-search',
              items: [
                // {
                //   label: 'Todo',
                //   icon: 'pi pi-pencil'
                // },
                {
                    label: 'Películas',
                    icon: 'pi pi-bolt',
                    command: () => this.myRouter.navigate(["/peliculas"])
                },
                // {
                //     label: 'Series',
                //     icon: 'pi pi-server'
                // }
              ]
          },
          {
              label: 'Contact',
              icon: 'pi pi-envelope'
          }
      ]
  }

  login(){
    console.log("hola")
    this.myRouter.navigate(['/login'])
  }
}
