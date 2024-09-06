import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { TicketsEnAttenteComponent } from './tickets-en-attente/tickets-en-attente.component'
import { DataTablesModule } from 'angular-datatables';
import { EspaceDeTicketComponent } from './espace-de-ticket/espace-de-ticket.component';
import { AuthentificationService } from './services/authentification.service';
import { AuthGuard } from './auth.guard';
import { TicketsTraiteesComponent } from './tickets-traitees/tickets-traitees.component';
import { TicketsAnnuleesComponent } from './tickets-annulees/tickets-annulees.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    DashboardComponent,
    MenuDashboardComponent,
    TicketsEnAttenteComponent,
    EspaceDeTicketComponent,
    TicketsTraiteesComponent,
    TicketsAnnuleesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    DataTablesModule,
    
  ],
  providers: [AuthentificationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
