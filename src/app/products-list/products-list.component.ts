import { Component, OnInit } from '@angular/core';

import {products} from '../products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
   products=products;
  constructor() { }
onNotify(name) {
    window.alert('You will be notified when the product goes on sale'+name);
  }
  ngOnInit() {
  }
  shae(name):void{
     alert("共享"+name);
  }
}