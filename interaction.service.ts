import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import {Flight} from '../app/models/flight'

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private FlightsavaliableComponent = new Subject<Flight>();
  flyingId$ =this.FlightsavaliableComponent.asObservable();
  constructor() { }

  sendMessage(flight:Flight){
    this.FlightsavaliableComponent.next(flight);
  }
}
