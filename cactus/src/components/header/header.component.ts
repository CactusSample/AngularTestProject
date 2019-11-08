import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDisplayName: string;


    
  cart: any;
  constructor(public auth: AuthService, private store: Store<{ items: []; cart: [] }>) { }

  ngOnInit() {
    this.userDisplayName = localStorage.getItem('loggedUser');
    this.store.pipe(select('product')).subscribe((data) => {
      this.cart = data.cart;
    });
  }

}
