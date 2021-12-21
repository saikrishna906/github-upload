import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { BookingsearchComponent } from './bookingsearch/bookingsearch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FlightsavaliableComponent } from './flightsavaliable/flightsavaliable.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketbookingComponent,
    BookingsearchComponent,
    FlightsavaliableComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,ReactiveFormsModule,
    MatGridListModule,MatToolbarModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
