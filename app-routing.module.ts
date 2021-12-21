import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { BookingsearchComponent } from './bookingsearch/bookingsearch.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightsavaliableComponent } from './flightsavaliable/flightsavaliable.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{path:'booking',component:TicketbookingComponent},
{path:'bookingsearch',component:BookingsearchComponent},
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{path:'flights',component:FlightsavaliableComponent},
{path:'**', redirectTo: '/home' , pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
