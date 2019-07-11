import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { MenWatchComponent } from './men-watch/men-watch.component';
import { WomenWatchComponent } from './women-watch/women-watch.component';
import { SaleComponent } from './sale/sale.component';
import { HomeComponent } from './home/home.component';
import { AdmiinComponent } from './admiin/admiin.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'new-arrival',component:NewArrivalComponent},
  {path:'men-watch',component:MenWatchComponent},
  {path:'women-watch',component:WomenWatchComponent},
  {path:'sale',component:SaleComponent},
  {path:'',component:HomeComponent},
  {path:'admiin',component:AdmiinComponent},
  {path:'cart',component:CartComponent},
  {path:'form',component:FormComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
