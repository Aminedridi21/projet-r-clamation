import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  constructor(private http:HttpClient,private router:Router,private auth:AuthentificationService,private apiService:ApiService){}
  adminForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })
  
  
  AdminLogin(LoginForm:FormGroup){
    const username = LoginForm.value.username;
    const password = parseInt(LoginForm.value.password);
  //console.log(LoginForm.value);
  this.apiService.user_login(LoginForm.value).subscribe(
    (response)=>{
      console.log(response)
      if(response!=null){
        console.log('mawjoud fil base');
        localStorage.setItem('token',response.token)
        this.router.navigate(['dashboard']);
      }
      else{
        console.log('mich mawjoud');
        alert('Invalid credentials');
        this.router.navigate(['/']);
        
      }
    }
  )
};


}
