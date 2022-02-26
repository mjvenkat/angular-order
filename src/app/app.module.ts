import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// used to create fake backend
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { BlogAreaComponent } from './components/blog-area/blog-area.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { AuthModule } from './auth/auth.module';
import { RegisterComponent } from './components/register/register.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AreaheaderComponent } from './components/areaheader/areaheader.component';
import { ButtonComponent } from './components/button/button.component';
import { OrderComponent } from './components/order/order.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { NoOrdersComponent } from './components/no-orders/no-orders.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AlertComponent } from './components/alert/alert.component';
import { PicletsComponent } from './components/piclets/piclets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    BlogAreaComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BootstrapComponent,
    OrdersComponent,
    AreaheaderComponent,
    ButtonComponent,
    OrderComponent,
    AddOrderComponent,
    NoOrdersComponent,
    HomeComponent,
    AlertComponent,
    PicletsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
