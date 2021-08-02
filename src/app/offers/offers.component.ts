import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer';
import { OfferService } from '../offer.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  offers: Offer[] = [];

  selectedOdd: any;

  constructor(
    private offerService: OfferService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.getOffers();
  }

  onSelect(odd: any): void {
    console.log(odd);
    this.selectedOdd = odd;
  }

  getOffers(): void {
    this.offerService.getOffers().subscribe((offers) => (this.offers = offers));
  }

  addToTicket(offer: Offer) {
    this.ticketService.addToTicket(offer);
    window.alert('Offer added to the ticket!');
  }
}
