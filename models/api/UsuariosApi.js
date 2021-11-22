import express from "express";
import {deleteAll, del, create, update, findOne,findAll,findAllStudents, findAllTeachers} from "./functions/FunçõesUsuariosAPI.js"

const router = express.Router();

  // Create a new User
router.route("/api/usuarios")
  .get(findAll)
  .delete(deleteAll);

router.route("/api/usuarios/:id")
  .get(findOne)
  .put(update)
  .delete(del)
  
router.route("/api/alunos")
  .post(create)
  .get(findAllStudents)
  
router.route("/api/alunos/:id")
  .get(findOne)
  .put(update)
  .delete(del)

router.route("/api/professores")  
  .post(create)
  .get(findAllTeachers)
  
router.route("/api/professores/:id")
  .get(findOne)
  .put(update)
  .delete(del)

export default router;