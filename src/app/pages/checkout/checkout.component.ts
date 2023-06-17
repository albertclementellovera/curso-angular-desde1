import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Store } from 'src/app/shared/interfaces/stores.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  model = {
    name: 'Albert',
    store: '',
    shippingAddress: '',
    city: ''
  };
  isDelibery: boolean=false;
  stores: Store[] = []
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void{
    this.getStores();
  }

  onPickupOrDelivery(value: boolean): void{
    this.isDelibery = value;
  }

  onsubmit():void{
    console.log('Guardar');
  }
  private getStores():void{
    this.dataSvc.getStores()
    .pipe(
      tap((stores:Store[]) => this.stores = stores)
    )
    .subscribe()
  }

}
