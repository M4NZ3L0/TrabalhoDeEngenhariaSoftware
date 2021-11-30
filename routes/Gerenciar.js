import express from "express";

import { CriarCurso,AtualizarCurso,DeletarCurso,
    DeletarInstrumentos, CriarInstrumentos, AtualizarInstrumentos,
    CriarAluno, AtualizarAluno, DeletarAluno,
    CriarProfessor, AtualizarProfessor, DeletarProfessor
} from "../models/logic/GerenciarFunções.js";

import { CheckProf,CheckLogged,CheckAdmin } from "../models/logic/Check-Auth.js";

import RenderFunctions from "../models/logic/Gerenciar.js";

const router = express.Router();

router.route("/gerenciaralunos")
    .get(CheckLogged,CheckProf,async (req, res) => {
    const { header,username } = res.locals;
        await RenderFunctions.FunçãoAlunos();
        res.render("GerenciarAlunos.ejs", {
            ExibirAluno: RenderFunctions.alunos,
            header,
            username
        })
    })
    .post(CheckProf,CriarAluno);

router.route("/atualizarAluno/:id")
    .get(CheckLogged,CheckProf,async (req, res) => {
    const { header,username } = res.locals;
        res.render("AtualizarAluno.ejs",{
            header,
            username});
    })
    .post(CheckProf,AtualizarAluno);

router.route("/deletarAluno/:id")
.get(CheckLogged,CheckProf,async (req, res) => {
        res.send("Deletar");
    })
    .post(CheckLogged,CheckProf,DeletarAluno);
    
//Instrumentos

router.route("/gerenciarinstrumentos")
    .get(CheckLogged,CheckProf,async (req, res) => {
    const { header,username } = res.locals;
        await RenderFunctions.FunçãoInstrumentos();
        res.render("GerenciarInstrumentos.ejs", {
            ExibirInstrumento: RenderFunctions.instrumentos,
            header,
            username
        })
    })
    .post(CheckProf,CriarInstrumentos);

router.route("/atualizarInstrumento/:id")
    .get(CheckLogged,CheckProf,async (req, res) => {
    const { header,username } = res.locals;
        res.render("AtualizarInstrumentos.ejs",{
            header,
            username});
    })
    .post(CheckProf,AtualizarInstrumentos);

router.route("/deletarinstumentos/:id")
.get(CheckLogged,CheckProf,async (req, res) => {
        res.send("Deletar");
    })
    .post(CheckLogged,CheckProf,DeletarInstrumentos);
    
//Cursos

router.route("/gerenciarcursos")
    .get(CheckLogged,CheckProf,async (req, res) => {
    const { header,username } = res.locals;
        await RenderFunctions.FunçãoCursos();
        res.render("GerenciarCursos.ejs", {
            ExibirCurso: RenderFunctions.cursos,
            header,
            username
        })
    })
    .post(CheckProf,CriarCurso);

router.route("/atualizarCurso/:id")
    .get(CheckLogged,CheckProf,async (req, res) => {
    const { header,username } = res.locals;
        res.render("AtualizarCurso.ejs",
           { header,
            username});
    })
    .post(CheckProf,AtualizarCurso);

router.route("/deletarcursos/:id")
    .post(CheckLogged,CheckProf,DeletarCurso);
    
//Profs

router.route("/gerenciarprofessores")
    .get(CheckLogged,CheckAdmin,async (req, res) => {
    const { header,username } = res.locals;
        await RenderFunctions.FunçãoProfessores();
        res.render("GerenciarProfessores.ejs", {
            ExibirProfessor: RenderFunctions.professores,
            header,
            username
        })
    })
    .post(CheckAdmin,CriarProfessor);

router.route("/atualizarProfessor/:id")
    .get(CheckLogged,CheckAdmin,async (req, res) => {
    const { header,username } = res.locals;
        res.render("AtualizarProfessor.ejs",
            {header,
            username});
    })
    .post(CheckAdmin,AtualizarProfessor);

router.route("/deletarProfessor/:id")
.get(CheckLogged,CheckAdmin, async (req, res) => {
        res.send("Deletar");
    })
    .post(CheckAdmin,DeletarProfessor);
    

export default router;