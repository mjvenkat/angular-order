import { Product } from './../../../Product';
import { Order } from 'src/Order';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewService } from 'src/app/services/view.service';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  @Output() onAddOrder: EventEmitter<Order> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  currentUser: User;
  orderProduct: string;
  orderPrice: string;
  productType: string;
  shippingAddress: string;
  orderStatus: string = 'PENDING';
  productCode: Product;
  subscription: Subscription;
  products: Product[] = [];
  constructor(
    private orderService: OrderServiceService,
    private viewService: ViewService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.orderService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  getCurrentUser() {
    return this.authService.getCurrentUserInfo();
  }

  onSubmit() {
    if (!this.orderProduct) {
      alert('Please add Task');
      return;
    }

    const newOrder = {
      userId: this.getCurrentUser().id,
      orderProduct: this.orderProduct,
      orderPrice: this.orderPrice,
      productType: this.productType,
      orderStatus: this.orderStatus,
      productCode: this.productCode.id,
      shippingAddress: this.shippingAddress,
    };
    console.log(newOrder);
    this.onAddOrder.emit(newOrder);

    this.orderProduct = '';
    this.orderPrice = '';
    this.productType = '';
    this.orderStatus = '';
    this.productCode.id = 0;
    this.shippingAddress = '';
    this.viewService.toggleOrderArea('orders');
  }

  showPrice(product: any) {
    console.log('on show price');
    this.orderPrice = product.price;
    this.orderProduct = product.name;
    this.productType = product.type;
  }
}
