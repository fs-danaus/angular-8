import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
@Input() product;
@Output() nodifyEvent=new EventEmitter();
  constructor() { }
nodify(name):void{
 // alert("当前商品名称:"+name);
  this.nodifyEvent.emit(name);
  //return "aaa";
}
  ngOnInit() {
  }

}