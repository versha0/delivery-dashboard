import { Component, ViewChild, OnInit } from '@angular/core';
import {SignaturePadComponent} from 'angular-signature-pad/src/components/signature-pad/signature-pad.component';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  @ViewChild(SignaturePadComponent) signaturePad: SignaturePadComponent;
  public signaturePadOptions ={
    'min-width' : 2,
    penColor: 'rgb(66,133,244)' ,
    backgroundColor: 'rgb(255,255,255)',
    canvasWidth: 450,
    canvasHeight: 150,
  }
  constructor() { }

  ngOnInit() {
  }

}
