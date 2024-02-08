/* Server Application */
import express from "express";
import cors from "cors";
import routers from "./routes/pets.js";

const server = express();

server.use(express.json());
server.use(cors());

server.use("/", routers);

server.listen(5000, () => {
  console.log("Server UP ON PORT 5000");
});
