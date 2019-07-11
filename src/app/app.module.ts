import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { MenWatchComponent } from './men-watch/men-watch.component';
import { WomenWatchComponent } from './women-watch/women-watch.component';
import { SaleComponent } from './sale/sale.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdmiinComponent } from './admiin/admiin.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    NewArrivalComponent,
    MenWatchComponent,
    WomenWatchComponent,
    SaleComponent,
    FooterComponent,
    HomeComponent,
    AdmiinComponent,
    CartComponent,
    FormComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
