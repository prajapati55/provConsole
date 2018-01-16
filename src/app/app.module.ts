import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ClientComponent },
  { path:'newclient', component:  AddnewclientComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'accesscode', component: AccesscodeComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'newinvoice', component: AddinvoiceComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'dialog', component: DialogOverviewExampleDialog}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientComponent,
    ExamComponent,
    InvoiceComponent,
    SubscriptionComponent,
    AccesscodeComponent,
    LogoutComponent,
    SidemenuComponent,
    AddnewclientComponent,
    AddinvoiceComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }