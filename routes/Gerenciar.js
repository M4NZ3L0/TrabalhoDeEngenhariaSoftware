import express from "express";
import { CriarCurso,AtualizarCurso,DeletarCurso,
 DeletarInstrumentos,CriarInstrumentos,AtualizarInstrumentos } from "../models/logic/GerenciarFunções.js";
import RenderFunctions from "../models/logic/Gerenciar.js";

const router = express.Router();

router.route("/gerenciaralunos")
    .get(async (req, res) => {
        await RenderFunctions.FunçãoAlunos();
        res.render("GerenciarAlunos.ejs", {
            ExibirAluno: RenderFunctions.alunos
        })
    });

//Instrumentos

router.route("/gerenciarinstrumentos")
    .get(async (req, res) => {
        await RenderFunctions.FunçãoInstrumentos();
        res.render("GerenciarInstrumentos.ejs", {
            ExibirInstrumento: RenderFunctions.instrumentos
        })
    })
    .post(CriarInstrumentos);

router.route("/atualizarInstrumento/:id")
    .get(async (req, res) => {
        res.render("AtualizarInstrumentos.ejs");
    })
    .post(AtualizarInstrumentos);

router.route("/deletarinstumentos/:id")
.get(async (req, res) => {
        res.send("Deletar");
    })
    .post(DeletarInstrumentos);
    
//Cursos

router.route("/gerenciarcursos")
    .get(async (req, res) => {
        await RenderFunctions.FunçãoCursos();
        res.render("GerenciarCursos.ejs", {
            ExibirCurso: RenderFunctions.cursos
        })
    })
    .post(CriarCurso);

router.route("/atualizarCurso/:id")
    .get(async (req, res) => {
        res.render("AtualizarCurso.ejs");
    })
    .post(AtualizarCurso);

router.route("/deletarcursos/:id")
    .post(DeletarCurso);




    
//Profs

router.route("/gerenciarprofessores")
    .get(async (req, res) => {
        await RenderFunctions.FunçãoProfessores();
        res.render("GerenciarProfessores.ejs", {
            ExibirProfessor: RenderFunctions.professores
        })
    });

export default router;