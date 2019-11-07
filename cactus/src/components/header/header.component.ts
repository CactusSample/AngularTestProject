import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart: any;
  constructor(private store: Store<{ items: []; cart: [] }>) { }

  ngOnInit() {
    this.store.pipe(select('product')).subscribe((data) => {
      this.cart = data.cart;
    });
  }

}
