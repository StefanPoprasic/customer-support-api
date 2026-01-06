import { eventBus } from "./eventBus";

eventBus.subscribe("TicketCreated", (ticket) => {
  console.log("📩 TicketCreated event received:", ticket);
});
