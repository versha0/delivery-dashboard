import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-canceldialogue',
  templateUrl: './canceldialogue.component.html',
  styleUrls: ['./canceldialogue.component.css']
})
export class CanceldialogueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    onyes() {
    this.router.navigateByUrl('reasons');
    }
    onNo() {
    this.router.navigateByUrl('driverdashboard');
    }
}
