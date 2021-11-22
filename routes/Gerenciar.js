import express from "express";
import axios from "axios";
import RenderFunctions from "../models/logic/Gerenciar.js";

const router = express.Router();

router.route("/gerenciaralunos")
    .get(async (req, res) => {
        await RenderFunctions.FunçãoAlunos();
        res.render("GerenciarAlunos.ejs", {
            ExibirAluno: RenderFunctions.alunos
        })
    });

router.route("/gerenciarinstrumentos")
    .get(async (req, res) => {
        await RenderFunctions.FunçãoInstrumentos();
        res.render("GerenciarInstrumentos.ejs", {
            ExibirInstrumento: RenderFunctions.instrumentos
        })
    });

router.route("/gerenciarcursos")
    .get(async (req, res) => {
        await RenderFunctions.FunçãoCursos();
        res.render("GerenciarCursos.ejs", {
            ExibirCurso: RenderFunctions.cursos
        })
    });

router.route("/gerenciarprofessores")
    .get(async (req, res) => {
        await RenderFunctions.FunçãoProfessores();
        res.render("GerenciarProfessores.ejs", {
            ExibirProfessor: RenderFunctions.professores
        })
    });

export default router;