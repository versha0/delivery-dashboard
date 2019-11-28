import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule, AlertModule, ButtonsModule} from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MaindriverdashboardComponent } from './maindriverdashboard/maindriverdashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigatelocationComponent } from './navigatelocation/navigatelocation.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignatureComponent } from './signature/signature.component';
import {SignaturePadModule} from 'angular2-signaturepad';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
import {SignatureService} from './signature.service';
import {InteractionService} from './interaction.service';
import { CanceldialogueComponent } from './canceldialogue/canceldialogue.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatSelectModule} from '@angular/material';
import { CancelreasonComponent } from './cancelreason/cancelreason.component';




@NgModule({
  declarations: [
    AppComponent,
    MaindriverdashboardComponent,
    NavigatelocationComponent,
    SignatureComponent,
    CanceldialogueComponent,
    CancelreasonComponent,
  ],

  entryComponents: [CanceldialogueComponent],
  imports: [
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BrowserModule,
    AccordionModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    SignaturePadModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [SignatureService, InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
