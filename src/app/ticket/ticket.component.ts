import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../offer';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  items = this.ticketService.getItems();

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {}
}
