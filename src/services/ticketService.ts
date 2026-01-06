import { eventBus } from "../events/eventBus";
import { TicketRepository } from "../repositories/ticketRepository";

interface CreateTicketInput {
  title: string;
  description?: string;
}

export class TicketService {
  private repository = new TicketRepository();

  createTicket(input: CreateTicketInput) {
    const ticket = this.repository.create(input);

    eventBus.publish("TicketCreated", ticket);

    return ticket;
  }
}
