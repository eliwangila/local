import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  responsedata: any;

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
   
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }
  

  ngOnInit(): void {
  }

  
  submit(){

    if(this.form.valid){
      return;
    }
    this.authService
    .login(this.form.value.username, this.form.value.password)
    .subscribe((response) => {
      this.responsedata = response;
      console.log(this.responsedata);
      if(this.responsedata.status == 200){
        this.router.navigate(['/clerk']);
      }

    });
    

}}
