import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InteractionService} from '../interaction.service';

@Component({
  selector: 'app-maindriverdashboard',
  templateUrl: './maindriverdashboard.component.html',
  styleUrls: ['./maindriverdashboard.component.css']
})
export class MaindriverdashboardComponent implements OnInit {
   temp: any = [];

  userData: any =
    {
      vehiclenumber: 'KA04P9437',
      totaldistance: '20',
      depoaddress: 'kormangala',
    };

  orderData: any = [{
    customername: 'Adams Bakers',
    ordernumber: 'OR13213',
    customeraddress: 'marathahalli',
    ordervolume: '10L',
    status: 'pending',


  },
    {
      customername: 'Clark Davis',
      ordernumber: 'OR13214',
      customeraddress: 'forum%20mall',
      ordervolume: '50L',
      status: 'pending',

    },
    {
      customername: 'Reily Smith',
      ordernumber: 'OR13215',
      customeraddress: 'indiranagar%20banglore',
      ordervolume: '60L',
      status: 'pending',

    },
    {
      customername: 'Frank Evans',
      ordernumber: 'OR13210',
      customeraddress: 'bomanahalli',
      ordervolume: '15L',
      status: 'pending',

    }];



  constructor(private router: Router,
              private interactionserv: InteractionService) {
    console.log(this.userData.vehiclenumber);
    // this.userData.vehiclenumber = '1234';
    // console.log(this.userData.vehiclenumber);
  }

  ngOnInit() {
    // for (let i = 0 ; i < this.orderData.length ; i++) {
    //   if (this.orderData[i].status === 'pending') {
    //
    //     this.temp[0]  = this.orderData[i + 1];
    //     console.log(this.temp);
    //     break;
    //   }
    // }
    for(let i = 0; i < this.orderData.length; i++) {
      if (this.orderData[i].status === 'pending') {
        this.temp[0] = this.orderData[i];
        this.temp[1]=this.orderData[i+1];
        console.log(this.temp[0]);
        console.log(this.temp[1]);
        break;
      }
    }
  }
  navigate() {
    this.interactionserv.sendMessage(this.temp[0].customeraddress + ' ' + this.temp[1].customeraddress);
    this.router.navigateByUrl('navigate');
  }

  signature() {

    // for(let vehicle of this.orderData){

    // }


    this.router.navigateByUrl('signature');
  }
}
