import Fastify from "fastify";
import { healthRoutes } from "./routes/health";
import { ticketRoutes } from "./routes/tickets";
import "./events/ticketListeners";
const app = Fastify({
    logger: true
});

app.register(healthRoutes);
app.register(ticketRoutes);


const start = async () => {
    try{
        await app.listen({port: 3000});
        console.log("Server running on http://localhost:3000");
    } catch(err){
        app.log.error(err);
        process.exit(1);
    }
};

start();

