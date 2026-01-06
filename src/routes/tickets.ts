import { FastifyInstance } from "fastify";
import { eventBus } from "../events/eventBus";
import { TicketService } from "../services/ticketService";
interface CreateTicketBody {
    title: string;
    description?: string;
}


export async function ticketRoutes(app: FastifyInstance) {
    const ticketService = new TicketService();
    app.post<{ Body: CreateTicketBody }>(
        "/tickets",
        {
            schema:{
                body:{
                    type:"object",
                    required:["title"],
                    properties:{
                        title:{type:"string", minLength:3},
                        description: {type:"string"}
                    }
                }
            }
        }, async (request, reply) =>{
                const ticket = ticketService.createTicket(request.body);
                return ticket;
        }
    )
}