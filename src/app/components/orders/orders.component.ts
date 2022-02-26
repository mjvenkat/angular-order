import { Component, Input, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { ViewService } from 'src/app/services/view.service';
import { Order } from 'src/Order';
import { Product } from 'src/Product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  productType: string = 'books';
  ordersAvailable: boolean = true;
  CustomerOrders: Order[] = [];
  CustomerOrdersModified: Order[] = [];
  showOrders: boolean = true;
  products: Product[] = [];
  showCreateOrderForm: boolean = false;

  noOrders: boolean = true;
  @Input() order: Order;
  @Input() classValue: string;
  constructor(
    private orderService: OrderServiceService,
    private viewService: ViewService
  ) {}

  ngOnInit(): void {
    this.orderService
      .getOrders()
      .subscribe((orders) => (this.CustomerOrders = orders));
    this.orderService
      .getProducts()
      .subscribe((products) => (this.products = products));
    this.viewService
      .onToggle()
      .subscribe((value) => (this.showCreateOrderForm = value));
  }

  areOrdersThere() {
    return this.CustomerOrders.length > 0;
  }

  getOrders(): Order[] {
    console.log('inside the method');
    console.log('inside the method');
    this.CustomerOrdersModified = this.CustomerOrders;
    // console.log('Customer Orders::' + this.CustomerOrders);
    let modifiedOrders: Order[] = [];
    this.CustomerOrdersModified.forEach((element) => {
      console.log('>>inside the method');
      let product: any = this.products.find(
        (p) => p.id === element.productCode
      );
      console.log('****' + product?.name);
      element.orderProduct = product?.name;
      //modifiedOrders.push(element);
    });
    console.log(
      '>>>>' +
        this.CustomerOrdersModified.sort(
          (o1: Order, o2: Order) => <number>o2.id - <number>o1.id
        )
    );
    // originalOrders.forEach((order: any) => {
    //   console.log('order::' + order.orderProduct);
    //   const url = `${this.apiUrl}/${order.productModel}`;
    //   let product: any = this.httpClient.get<Product>(url);
    //   order.orderProduct = product.name;
    //   console.log('Hello...' + product.name);
    // });
    return this.CustomerOrdersModified;
  }

  createOrder(order: Order) {
    console.log('inside the method');
    // console.log('order added' + order.orderStatus);
    //this.orderService.getModifiedOrders();
    this.orderService
      .createOrder(order)
      .subscribe((order) => this.CustomerOrders.push(order));
  }
}
