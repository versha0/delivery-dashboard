import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule, AlertModule, ButtonsModule} from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MaindriverdashboardComponent } from './maindriverdashboard/maindriverdashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularSignaturePadModule} from 'angular-signature-pad/angular-signature-pad';
import { SignatureComponent } from './signature/signature.component';




@NgModule({
  declarations: [
    AppComponent,
    MaindriverdashboardComponent,
    SignatureComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BrowserModule,
    AccordionModule.forRoot(),
    AngularSignaturePadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
