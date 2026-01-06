interface Ticket {
  id: number;
  title: string;
  description?: string;
}

export class TicketRepository {
  private tickets: Ticket[] = [];
  private nextId = 1;

  create(ticket: Omit<Ticket, "id">): Ticket {
    const newTicket: Ticket = {
      id: this.nextId++,
      ...ticket,
    };
    this.tickets.push(newTicket);
    return newTicket;
  }

  getAll(): Ticket[] {
    return this.tickets;
  }
}
