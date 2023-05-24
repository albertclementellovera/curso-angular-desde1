import { Component, Input, Output, EventEmitter,} from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../interfases/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent{

  @Input() product!: Product;
  //Evento personalizado
  @Output() addToCartClick = new EventEmitter<Product>();

  onClick(): void{
    this.addToCartClick.emit(this.product);
 }
}
