import express from "express";
import {findOne,findAllCourses,CreateCourse,del,update,delAll} from "./functions/FunçõesCursosAPI.js"

const router = express.Router();

  // Create a new User
router.route("/api/cursos")
  .post(CreateCourse)
  .get(findAllCourses)
  .delete(delAll)

router.route("/api/cursos/:id")
  .put(update)
  .get(findOne)
  .delete(del)  

export default router;