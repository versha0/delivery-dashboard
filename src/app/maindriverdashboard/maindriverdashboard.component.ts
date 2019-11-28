import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InteractionService} from '../interaction.service';
import {Orderdata} from '../orderdata';
import {HttpClient} from '@angular/common/http';
import {DataorderService} from '../dataorder.service';
import {error} from 'util';
import {MatDialog} from '@angular/material';
import {CanceldialogueComponent} from '../canceldialogue/canceldialogue.component';
// import Order = jasmine.Order;

@Component({
  selector: 'app-maindriverdashboard',
  templateUrl: './maindriverdashboard.component.html',
  styleUrls: ['./maindriverdashboard.component.css']
})
export class MaindriverdashboardComponent implements OnInit {
  temp = new Array<Orderdata>();
  currentorder: any;
  orderData: Orderdata[];
  // userData: any =
  //   {
  //     vehiclenumber: 'KA04P9437',
  //     totaldistance: '20',
  //     depoaddress: 'kormangala',
  //   };
  //
  // orderData: any = [{
  //   customername: 'Adams Bakers',
  //   ordernumber: 'OR13213',
  //   customeraddress: 'marathahalli',
  //   ordervolume: '10L',
  //   status: 'pending',
  //
  //
  // },
  //   {
  //     customername: 'Clark Davis',
  //     ordernumber: 'OR13214',
  //     customeraddress: 'forum%20mall',
  //     ordervolume: '50L',
  //     status: 'pending',
  //
  //   },
  //   {
  //     customername: 'Reily Smith',
  //     ordernumber: 'OR13215',
  //     customeraddress: 'indiranagar%20banglore',
  //     ordervolume: '60L',
  //     status: 'pending',
  //
  //   },
  //   {
  //     customername: 'Frank Evans',
  //     ordernumber: 'OR13210',
  //     customeraddress: 'bomanahalli',
  //     ordervolume: '15L',
  //     status: 'pending',
  //
  //   }];


  constructor(private router: Router,
              private interactionserv: InteractionService,
              private dataorder: DataorderService,
              public dialog: MatDialog) {
    // console.log(this.userData.vehiclenumber);
    // this.userData.vehiclenumber = '1234';
    // console.log(this.userData.vehiclenumber);
  }

  async ngOnInit() {
    this.temp[0] = new Orderdata();
    this.temp[1] = new Orderdata();
    // for (let i = 0 ; i < this.orderData.length ; i++) {
    //   if (this.orderData[i].status === 'pending') {
    //
    //     this.temp[0]  = this.orderData[i + 1];
    //     console.log(this.temp);
    //     break;
    //   }
    // }
    this.orderData = await this.dataorder.getdata().toPromise().then(
      value => {
        console.log(value);
        return value as Orderdata[];
      }
    );
    console.log(this.orderData);
    for (let i = 0; i < this.orderData.length; i++) {
      if (this.orderData[i].orderStatus === 'pending') {
        this.currentorder = i;
        this.temp[0] = this.orderData[i];
        this.temp[1] = this.orderData[i + 1];
        console.log(this.temp[0]);
        console.log(this.temp[1]);
        break;
      }
    }
  }

  navigate() {
    this.interactionserv.sendMessage(this.temp[0].customerAddress + ' ' + this.temp[1].customerAddress);
    this.router.navigateByUrl('navigate');
  }

  signature() {

    // for(let vehicle of this.orderData){

    // }
    this.orderData[this.currentorder].orderStatus = 'delivered';
    this.dataorder.updateOrderStatus(this.orderData[this.currentorder].id, this.orderData[this.currentorder].orderStatus).toPromise().then(
      result => {
        console.log(result);
      },
      reason => {
        console.log(reason);
      });
    console.log(this.orderData);

    this.router.navigateByUrl('signature');
  }

  openDialogue() {
    this.dialog.open(CanceldialogueComponent);
  }

  delayDelivery() {
    this.orderData[this.currentorder].orderStatus = 'delayed';
    this.dataorder.updateOrderStatus(this.orderData[this.currentorder].id, this.orderData[this.currentorder].orderStatus).toPromise().then(
      result => {
        console.log(result);
      },
      reason => {
        console.log(reason);
      });
    console.log(this.orderData);
    this.router.navigateByUrl('driverdashboard');
  }
}
