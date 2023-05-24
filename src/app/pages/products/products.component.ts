import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ProductsService } from './services/products.service';
import { Product } from './interfases/product.interface';
import { ShopingCartService } from 'src/app/shared/services/shopping-cart-service';

@Component({
  selector: 'app-products',
  template:`
    <section class="products">
      <app-product
        (addToCartClick)="addToCart($event)"
        [product]="product"
        *ngFor="let product of products">
      </app-product>
    </section>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products!: Product[];
  constructor(private productSvc: ProductsService, private shoppingCartSvc: ShopingCartService) {}

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(tap((products: Product[]) => this.products = products))
    .subscribe();
  }

  addToCart(product:Product):void{
    console.log('Add to cart',product);
    this.shoppingCartSvc.updateCart(product);
  }
}
