import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsEnAttenteComponent } from './tickets-en-attente/tickets-en-attente.component';
import { AuthGuard } from './auth.guard';
import { EspaceDeTicketComponent } from './espace-de-ticket/espace-de-ticket.component';
import { TicketsTraiteesComponent } from './tickets-traitees/tickets-traitees.component';
import { TicketsAnnuleesComponent } from './tickets-annulees/tickets-annulees.component';
const routes: Routes = [
   {path:'',component:AdminloginComponent},
   {path:'login',component:LoginComponent},
      {path: 'dashboard',
        component: DashboardComponent,
        canActivate:[AuthGuard]
       },
   {path:'tickets-en-attente',component:TicketsEnAttenteComponent,canActivate:[AuthGuard]},
   {path:'espace-ticket',component:EspaceDeTicketComponent,canActivate:[AuthGuard]},
   {path:'tickets-traites',component:TicketsTraiteesComponent,canActivate:[AuthGuard]},
   {path:'tickets-annules',component:TicketsAnnuleesComponent,canActivate:[AuthGuard]}
      ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
