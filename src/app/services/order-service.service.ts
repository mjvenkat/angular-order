import { Injectable } from '@angular/core';
import { Order } from 'src/Order';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/Product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  apiUrl: string = 'http://localhost:3000/Orders';
  productAPIUrl: string = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) {}

  getModifiedOrders() {
    let modOrders: Order[] = [];
    this.getOrders().subscribe((orders) => (modOrders = orders));
    console.log(modOrders.length);
  }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.apiUrl);

    // var fOrders: Order[] = [];
    // originalOrders.subscribe((orders) => (fOrders = orders));

    // fOrders.forEach((element) => console.log(element.productModel));
    // originalOrders.forEach((order: any) => {
    //   console.log('order::' + order.orderProduct);
    //   const url = `${this.apiUrl}/${order.productModel}`;
    //   let product: any = this.httpClient.get<Product>(url);
    //   order.orderProduct = product.name;
    //   console.log('Hello...' + product.name);
    // });
    // console.log(
    //   originalOrders.forEach((element: any) =>
    //     console.log(element.orderProduct)
    //   )
    // );
    // return originalOrders;
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productAPIUrl);
  }

  createOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.apiUrl, order, httpOptions);
  }
}
