import { Component, OnInit } from '@angular/core';
import { Logindetails } from '../../models/logindetails';
import { RestService } from '../../services/rest.service';
import { Router } from "@angular/router";
import { FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg='';
  userLoginDetails : Logindetails;
  isInvalidCredential: boolean;
  isServerError: boolean;
  submitted = false;
  userDisplayName: '';
  constructor(private formBuilder: FormBuilder,private restService: RestService,private router: Router) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      Email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$')]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() 
  { 
   
    
    this.submitted=true;
    this.isInvalidCredential = false;
    this.userLoginDetails=this.loginForm.value;

    if(this.loginForm.invalid){
      return;
    }
    console.log('SUCCESS1!! :-)\n\n' + JSON.stringify(this.loginForm.value));
    if(this.loginForm.valid)
    {
    this.restService.postResource(this.loginForm.value).subscribe(
    (result)=>
    {
      console.log("hello iam here",result);
      console.log(result['reasonPhrase'])
      console.log(result.statusCode);
      
      //Checking the status of the response from the server

      if (result.statusCode === 401 || result.statusCode === 404) {
      this.isInvalidCredential = true;
       }
        //Navigating to the Dashboard on successfull login

       else if(result.statusCode === 200){
        //  this.router.navigateByUrl('dashboard');
         this.userDisplayName = this.loginForm.value.username;
      }
      
    },
     (error)=>
    {
        console.log('error',error);
        if (error.isErrorStatus === 500){
        this.isServerError = true;
        }
    })
    }   
  }

}
