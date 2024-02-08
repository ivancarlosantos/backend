/* routes */
import express from "express";
import { pets, findPet, adoptPet, cadastrar, petsAdopt, deletar } from "../controller/pets.js";

const router = express.Router();

router.get("/pets", pets);
router.get("/pets/:id", findPet);
router.get("/pets/adopt/:adotado", adoptPet);
router.post("/pets", cadastrar);
router.put("/pets/adopt/:id", petsAdopt);
router.delete("/pets/:id", deletar);

export default router;