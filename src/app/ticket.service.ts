import { Injectable } from '@angular/core';
import { Offer } from './offer';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  items: Offer[] = [];

  constructor() {}

  addToTicket(offer: Offer) {
    this.items.push(offer);
  }

  getItems() {
    return this.items;
  }

  clearTicket() {
    this.items = [];
    return this.items;
  }
}
