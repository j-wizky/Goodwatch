import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from '../../models/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css',
})
export class SingupComponent implements OnInit{
  form!: FormGroup;
  user!: UserInterface;

  emailControl!: AbstractControl;
  usernameControl!: AbstractControl;
  passwordControl!: AbstractControl;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) 
  {
    this.crearForm()
  }
  
  ngOnInit(): void {
    this.emailControl = this.form.get('email')!;
    this.usernameControl = this.form.get('username')!;
    this.passwordControl = this.form.get('password')!;
  }

  crearForm(){
    this.form = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submit(){
    console.log(this.form?.getRawValue())
    if(this.form?.invalid){
      this.form.markAllAsTouched()
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campos vacíos' });
      return;
    }
    let rawForm = this.form?.getRawValue();
    this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe(() => {
      this.router.navigate(['/home'])
    });
  }

  login(){
    this.router.navigate(['/login'])
  }


}
