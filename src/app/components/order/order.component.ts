import { OrderServiceService } from 'src/app/services/order-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/Order';
import { Product } from 'src/Product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  products: Product[] = [];
  constructor(private orderService: OrderServiceService) {}
  ngOnInit(): void {
    this.orderService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  getOrderCSSClasses(_order: Order): string {
    let orderClassValue = 'orderClass';
    let orderStatusLowerCase = _order.orderStatus.toLowerCase();
    switch (orderStatusLowerCase) {
      case 'delivered': {
        orderClassValue = 'orderClass-delivered';
        break;
      }
      case 'cancelled': {
        orderClassValue = 'orderClass-cancelled';
        break;
      }
    }
    return orderClassValue;
  }
}
