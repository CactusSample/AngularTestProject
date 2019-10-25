import { Component, OnInit } from '@angular/core';
import { Logindetails } from '../../models/logindetails'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel = new Logindetails('', '');
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.userModel));
    
  }
}
