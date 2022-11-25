import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware.js";
import { notFoundHandler } from "./middlewares/not-found.middleware.js";
import messagesRouter from "./routes/messages.route.js";

const app = express();

app.use(cors());

app.use(express.json());
app.set("json spaces", 2);

app.use("/api/v1/messages", messagesRouter);
app.use(errorHandler);
app.use(notFoundHandler);

const PORT = parseInt(process.env.PORT, 10) || 5000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
