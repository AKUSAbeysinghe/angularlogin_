import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:  [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
onLogin() {
  debugger;
//throw new Error('Method not implemented.');

    const isLocalData = localStorage.getItem("angularLocal");
    if(isLocalData !=null){
      const users = JSON.parse(isLocalData);

      const isUserFound = users.find((m: any) => m.userName == this.userLogin.userName && m.password == this.userLogin.password);
      if(isUserFound != undefined){
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert('User name or password is wrong');
      }
    }
    else{
      alert("No User Found!");
    }
}
toggleView() {
throw new Error('Method not implemented.');
}

  isLoginView: boolean = true;

  userRegisterObj: any={
    userName: "",
    password: "",
    emailId: "",
  }


  userLogin: any={
    userName: "",
    password: "",
  }

  router = inject(Router);


  onRegister(){
    debugger;
    const isLocalData = localStorage.getItem("angularLocal");
    if(isLocalData !=null){
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angularLocal",JSON.stringify(localArray));
    }
    else{
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angularLocal",JSON.stringify(localArray));
    }

    alert("Registration Success!");
  }


 

}





/*
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName: "",
    password: "",
    emailId: "",
  };

  userLogin: any = {
    userName: "",
    password: "",
  };

  toggleView() {
    this.isLoginView = !this.isLoginView;
  }

  onRegister() {
    const isLocalData = localStorage.getItem("angularLocal");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angularLocal", JSON.stringify(localArray));
    } else {
      const localArray = [this.userRegisterObj];
      localStorage.setItem("angularLocal", JSON.stringify(localArray));
    }
    alert("Registration Success!");
    this.toggleView();
  }

  onLogin() {
    const isLocalData = localStorage.getItem("angularLocal");
    if (isLocalData) {
      const localArray = JSON.parse(isLocalData);
      const user = localArray.find((u: any) => u.userName === this.userLogin.userName && u.password === this.userLogin.password);
      if (user) {
        alert("Login Success!");
      } else {
        alert("Invalid credentials!");
      }
    } else {
      alert("No users found. Please register.");
    }
  }
}

*/