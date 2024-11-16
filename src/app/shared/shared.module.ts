import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';
import { PaginatorModule } from 'primeng/paginator';
import { KnobModule } from 'primeng/knob';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    RippleModule,
    ToastModule,
    AvatarModule,
    AvatarGroupModule,
    CardModule,
    ScrollPanelModule,
    TagModule,
    PaginatorModule,
    KnobModule
  ],
  exports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    RippleModule,
    ToastModule,
    AvatarModule,
    AvatarGroupModule,
    CardModule,
    ScrollPanelModule,
    TagModule,
    PaginatorModule,
    KnobModule
  ],
  providers: [
    MessageService
  ]
})
export class SharedModule { }
