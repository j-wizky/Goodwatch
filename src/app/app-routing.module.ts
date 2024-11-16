import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    data: { preload: true },
    loadChildren: () => import("../app/Pages/home/home.module").then((m) => m.HomeModule) 
  },
  {
    path: "login",
    data: { preload: true },
    loadChildren: () => import("../app/Pages/login/login.module").then((m) => m.LoginModule) 
  },
  {
    path: "peliculas",
    data: { preload: true },
    loadChildren: () => import("../app/Pages/peliculas/peliculas.module").then((m) => m.PeliculasModule) 
  },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
