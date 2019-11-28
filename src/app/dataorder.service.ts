import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataorderService {
  url = 'http://localhost:8084/orders/findAll';
  url2 = 'http://localhost:8084/orders/updateOrder';
  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get(this.url);
  }

  updateOrderStatus(id: number, status: string) {
    return this.http.put(this.url2, {}, {
      params: new HttpParams().set('id', id.toString()).append('orderStatus', status)
    });
  }

//   @GetMapping
//   public ResponseEntity updateDeliveryStatus(@RequestParam String id){
//     sev.upe(id)
// }
//
// {
//   obj =getby(ud)
//   s

}

