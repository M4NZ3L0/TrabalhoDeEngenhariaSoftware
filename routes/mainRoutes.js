import express from "express";
import InstrumentData from "../models/logic/ExibirInstrumentos.js";
import CourseData from "../models/logic/ExibirCursos.js";
import TeachersData from "../models/logic/ExibirProfessores.js";
import { CheckProf,CheckLogged,CheckAdmin } from "../models/logic/Check-Auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
    
    res.render("Inicio.ejs");
})

router.get("/log",CheckLogged, async (req, res) => {
    const { header,username } = res.locals;

    res.render("InicioLogado.ejs", {header, username});
})

router.route("/instrumentos")
    .get(async (req, res) => {
        await InstrumentData[1]();
        res.render("Instrumentos.ejs", {
            ExibirInstrumentos: InstrumentData[0]
        })
    });

router.route("/professores")
    .get(async (req, res) => {
        await TeachersData[1]()
        res.render("Professores.ejs", {
            ExibirProfessores: TeachersData[0]
        })
    });

router.route("/cursos")
    .get(async (req, res) => {
        await CourseData[1]();
        res.render("Cursos.ejs", {
            ExibirCursos: CourseData[0]
        })
    });

export default router;