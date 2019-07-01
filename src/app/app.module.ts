import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components//login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './Guards/auth.guard';
import { AuthService } from './Services/auth.service';
import { NavbarComponent } from './Components/Nav/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CallWhatsappApiComponent } from './Components/call-whatsapp-api/call-whatsapp-api.component';
import { WhatsappAPIService } from './Services/whatsapp-api.service';
import { BlockUIModule } from 'ng-block-ui';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    SignUpComponent,
    CallWhatsappApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, HttpClientModule, BlockUIModule.forRoot()
  ],
  providers: [AuthGuard, AuthService, WhatsappAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
