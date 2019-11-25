import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maindriverdashboard',
  templateUrl: './maindriverdashboard.component.html',
  styleUrls: ['./maindriverdashboard.component.css']
})
export class MaindriverdashboardComponent implements OnInit {
  userData: any =
    {
      vehiclenumber: 'KA04P9437',
      totaldistance: '20',
      depoaddress: 'kormangala,bleh,bleh 560029',
      depolat: '12.9355° N',
      depolon: '7.6141° E'
    };
  test: any = {};
  orderData: any = [{
    customername: 'Adams Bakers',
    ordernumber: 'OR13213',
    customeraddress: 'marathalli,bleh,bleh,bleh,560089',
    ordervolume: '10L',
    lat: '12.9569° N',
    lon: '77.7011° E',
    status: 'pending',


  },
    {
      customername: 'Clark Davis',
      ordernumber: 'OR13214',
      customeraddress: 'banashkari,bleh,bleh,bleh,560089',
      ordervolume: '50L',
      lat: '12.9255° N',
      lon: '77.5468° E ',
      status: 'pending',

    },
    {
      customername: 'Reily Smith',
      ordernumber: 'OR13215',
      customeraddress: 'whitefield,bleh,bleh,bleh,560089',
      ordervolume: '60L',
      lat: '12° 57\' 21.72" N',
      lon: '77° 42\' 33.00" E',
      status: 'delivered',

    },
    {
      customername: 'Frank Evans',
      ordernumber: 'OR13210',
      customeraddress: 'bomanahalli,bleh,bleh,bleh,560089',
      ordervolume: '15L',
      lat: '12.9030° N',
      lon: '77.6242° E',
      status: 'pending',

    }];

  constructor() {
    console.log(this.userData.vehiclenumber);
  }

  ngOnInit() {
  }

}
