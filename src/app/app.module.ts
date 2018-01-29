import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ExamComponent } from './exam/exam.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AccesscodeComponent, DialogOverviewExampleDialog } from './accesscode/accesscode.component';
import { LogoutComponent } from './logout/logout.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AddnewclientComponent } from './addnewclient/addnewclient.component';
import { AddinvoiceComponent } from './addinvoice/addinvoice.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';
import { RequestService } from './services/request.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'client', component: ClientComponent, canActivate: [AuthGuard]},
  { path:'newclient', component:  AddnewclientComponent, canActivate: [AuthGuard]},
  { path: 'exam', component: ExamComponent, canActivate: [AuthGuard] },
  { path: 'accesscode', component: AccesscodeComponent, canActivate: [AuthGuard] },
  { path: 'subscription', component: SubscriptionComponent, canActivate: [AuthGuard] },
  { path: 'invoice', component: InvoiceComponent, canActivate: [AuthGuard] },
  { path: 'newinvoice', component: AddinvoiceComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LoginComponent },
  { path: 'dialog', component: DialogOverviewExampleDialog, canActivate: [AuthGuard]}
  ];

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    LoginComponent,
    HomeComponent,
    ClientComponent,
    ExamComponent,
    InvoiceComponent,
    SubscriptionComponent,
    AccesscodeComponent,
    //LogoutComponent,
    SidemenuComponent,
    AddnewclientComponent,
    AddinvoiceComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [AuthService,AuthGuard,RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }