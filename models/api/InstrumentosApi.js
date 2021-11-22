import express from "express";
import { findAllInstrument, CreateInstrument, del, update,findOne } from "./functions/FunçõesInstrumentosAPI.js";


const router = express.Router();

  // Create a new User
router.route("/api/instrumentos")
  .post(CreateInstrument)
  .get(findAllInstrument)

router.route("/api/instrumentos/:id")
  .put(update)
  .get(findOne)
  .delete(del)  

export default router;