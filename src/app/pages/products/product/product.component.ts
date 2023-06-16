import { Component, Input, Output, OnInit, EventEmitter,} from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  @Input() product!: Product;
  //Evento personalizado
  @Output() addToCartClick = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void{
  }

  onClick():void{
    console.log('clik',this.product);
    //Pasamos el product que nos envio el Padre con el @Input
    this.addToCartClick.emit(this.product)
  }
}
