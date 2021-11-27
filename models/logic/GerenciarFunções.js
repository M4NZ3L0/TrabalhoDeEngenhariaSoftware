import axios from 'axios';
export const CriarCurso = async (req, res) => {
    const obj = {
        curso: req.body.curso,
        professores: req.body.professores,
        diasdeaula: req.body.diasdeaula,
        horarios: req.body.horarios,
        alunosmatriculados: req.body.alunosmatriculados
    };

    axios.post("http://localhost:5050/api/cursos", obj)
        .then(() => res.redirect(req.originalUrl))
        .catch(err => console.log(err));
}

export const AtualizarCurso = async (req, res) => {

    const obj = {
        id: req.params.id,
        curso: req.body.curso,
        professores: req.body.professores,
        diasdeaula: req.body.diasdeaula,
        horarios: req.body.horarios,
        alunosmatriculados: req.body.alunosmatriculados
    };

    const updateurl = `http://localhost:5050/api/cursos/${req.params.id}`

    axios.put(updateurl, obj)
        .then(() => res.redirect(`http://localhost:5050/gerenciarcursos`))
        .catch(err => console.log(err));
}


export const DeletarCurso = async (req, res) => {

    const id = req.params.id;
    console.log(id);
    const deleteurl = `http://localhost:5050/api/cursos/${id}`;

    axios.delete(deleteurl)
        .then(() => res.redirect(`http://localhost:5050/gerenciarcursos`))
        .catch(err => console.log(err));
}

//#Professores

export const CriarProfessor = async (req, res) => {
    const obj = {
        curso: req.body.curso,
        professores: req.body.professores,
        diasdeaula: req.body.diasdeaula,
        horarios: req.body.horarios,
        alunosmatriculados: req.body.alunosmatriculados
    };

    axios.post("http://localhost:5050/api/cursos", obj)
        .then(() => res.redirect(req.originalUrl))
        .catch(err => console.log(err));
}

export const AtualizarProfessor = async (req, res) => {

    const obj = {
        id: req.params.id,
        curso: req.body.curso,
        professores: req.body.professores,
        diasdeaula: req.body.diasdeaula,
        horarios: req.body.horarios,
        alunosmatriculados: req.body.alunosmatriculados
    };

    const updateurl = `http://localhost:5050/api/cursos/${req.params.id}`

    axios.put(updateurl, obj)
        .then(() => res.redirect(`http://localhost:5050/gerenciarcursos`))
        .catch(err => console.log(err));
}


export const DeletarProfessor = async (req, res) => {

    const id = req.params.id;
    console.log(id);
    const deleteurl = `http://localhost:5050/api/cursos/${id}`;

    axios.delete(deleteurl)
        .then(() => res.redirect(`http://localhost:5050/gerenciarcursos`))
        .catch(err => console.log(err));
}

//#Alunos

export const CriarAluno = async (req, res) => {
    const obj = {
      nome: req.body.nome,
      senha: req.body.senha,
      email: req.body.email,
      datadenascimento: req.body.datadenascimento,
      endereço: req.body.endereço,
      telefone: req.body.telefone,
      rg: req.body.rg,
      cpf: req.body.cpf,
      professor: false,
      admin: false,
      vencimentopagamento: req.body.vencimentopagamento,
      turma: req.body.turma,
      curso: req.body.curso
    };

    axios.post("http://localhost:5050/api/alunos", obj)
        .then(() => res.redirect(req.originalUrl))
        .catch(err => console.log(err));
}

export const AtualizarAluno = async (req, res) => {

    const obj = {
      id:req.params.id,
      nome: req.body.nome,
      senha: req.body.senha,
      email: req.body.email,
      datadenascimento: req.body.datadenascimento,
      endereço: req.body.endereço,
      telefone: req.body.telefone,
      rg: req.body.rg,
      cpf: req.body.cpf,
      professor: false,
      admin:false,
      vencimentopagamento: req.body.vencimentopagamento,
      turma: req.body.turma,
      curso: req.body.curso
    };

    const updateurl = `http://localhost:5050/api/alunos/${req.params.id}`

    axios.put(updateurl, obj)
        .then(() => res.redirect(`http://localhost:5050/gerenciaralunos`))
        .catch(err => console.log(err));
}

export const DeletarAluno = async (req, res) => {

    const id = req.params.id;
    console.log(id);
    const deleteurl = `http://localhost:5050/api/alunos/${id}`;

    axios.delete(deleteurl)
        .then(() => res.redirect(`http://localhost:5050/gerenciaralunos`))
        .catch(err => console.log(err));
}

//#instruments


export const CriarInstrumentos = async (req, res) => {

    const obj = {
        nome: req.body.nome,
        codigo: req.body.codigo,
        tipo: req.body.tipo,
        tamanhocms: req.body.tamanhocms,
        pesokgs: req.body.pesokgs
    };

    axios.post("http://localhost:5050/api/instrumentos", obj)
        .then(() => res.redirect(req.originalUrl))
        .catch(err => console.log(err));
}

//#Professores
export const AtualizarInstrumentos = async (req, res) => {

    let id = req.params.id;
     const obj = {
        nome: req.body.nome,
        codigo: req.body.codigo,
        tipo: req.body.tipo,
        tamanhocms: req.body.tamanhocms,
        pesokgs: req.body.pesokgs
    };

    let updateurl = `http://localhost:5050/api/instrumentos/${id}`;

    axios.put(updateurl, obj)
        .then(() => res.redirect(`http://localhost:5050/gerenciarinstrumentos`))
        .catch(err => console.log(err));
}


export const DeletarInstrumentos = async (req, res) => {

    const id = req.params.id;
    console.log(id);
    const deleteurl = `http://localhost:5050/api/instrumentos/${id}`;

    axios.delete(deleteurl)
        .then(() => res.redirect(`http://localhost:5050/gerenciarinstrumentos`))
        .catch(err => console.log(err));
}