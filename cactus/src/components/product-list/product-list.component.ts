import { Component, OnInit, Input } from '@angular/core';
import { ProductDetails } from 'src/models/product-details';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: ProductDetails[] = [];

  constructor() { }

  ngOnInit() {
  }

}
