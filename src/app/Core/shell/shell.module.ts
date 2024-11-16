import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenubarModule } from 'primeng/menubar';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenubarModule
  ],
  exports: [
    TopbarComponent
  ],
  providers: [
    provideHttpClient()
  ]
  
})
export class ShellModule { }
