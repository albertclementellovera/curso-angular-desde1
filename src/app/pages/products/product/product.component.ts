import { Component, Input, OnInit} from '@angular/core';
import { Product } from '../interfases/product.interface';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  @Input() product!: Product;
  constructor() {}

  ngOnInit(): void{
  }
}

