import { environment } from './../environments/environment'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FootnoteComponent } from './footnote/footnote.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { HomeComponent } from './home/home.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AdminproductsComponent } from './admin/adminproducts/adminproducts.component';
import { AdminordersComponent } from './admin/adminorders/adminorders.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminusersComponent } from './admin/adminusers/adminusers.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootnoteComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingcartComponent,
    CheckoutComponent,
    OrdersuccessComponent,
    MyordersComponent,
    AdminproductsComponent,
    AdminordersComponent,
    LoginComponent,
    AboutComponent,
    AdminusersComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'login',component: LoginComponent},
      {path:'products',component: ProductsComponent},
      {path:'about',component: AboutComponent},
            
      {path:'shoppingcart',component: ShoppingcartComponent},
      {path:'checkout',component: CheckoutComponent, canActivate: [AuthGuard]},
      {path:'ordersuccess/:id',component: OrdersuccessComponent, canActivate: [AuthGuard]},
      {path:'myorders',component: MyordersComponent, canActivate: [AuthGuard]},
      
      {path:'admin/adminproducts',component: AdminproductsComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      {path:'admin/adminproducts/new',component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      {path:'admin/adminorders',component: AdminordersComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      {path:'admin/adminusers',component: AdminusersComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      // {path:'',component: Component},
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
