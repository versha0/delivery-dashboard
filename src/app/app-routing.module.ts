import {MaindriverdashboardComponent} from './maindriverdashboard/maindriverdashboard.component';
import {NavigatelocationComponent} from './navigatelocation/navigatelocation.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignatureComponent} from './signature/signature.component';
const routes: Routes = [
  { path : 'navigate', component: NavigatelocationComponent},
  { path : '', component: MaindriverdashboardComponent},
  { path : 'signature', component: SignatureComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingModule = [MaindriverdashboardComponent, NavigatelocationComponent]

