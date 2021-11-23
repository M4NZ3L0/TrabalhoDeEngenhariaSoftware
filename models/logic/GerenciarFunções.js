import axios from 'axios';
export const CriarCurso = async(req, res) => {
        const obj = {
            curso: req.body.curso,
            professores: req.body.professores,
            diasdeaula: req.body.diasdeaula,
            horarios:req.body.horarios,
            alunosmatriculados: req.body.alunosmatriculados
        };

        axios.post("http://localhost:5050/api/cursos", obj)
            .then(() => res.redirect(req.originalUrl))
            .catch(err => console.log(err));
}
    
export const AtualizarCurso = async (req, res) => {
    
    const obj = {
            id:req.params.id,
            curso: req.body.curso,
            professores: req.body.professores,
            diasdeaula: req.body.diasdeaula,
            horarios:req.body.horarios,
            alunosmatriculados: req.body.alunosmatriculados
    };
    
        const updateurl = `http://localhost:5050/api/cursos/${req.params.id}`
    
        axios.put(updateurl, obj)
            .then(() => res.redirect(`http://localhost:5050/gerenciarcursos`))
            .catch(err => console.log(err));
}
    
   
export const DeletarCurso = async (req,res) => {
    
    const id = req.params.id;
    console.log(id);
    const deleteurl = `http://localhost:5050/api/cursos/${id}`;
    
        axios.delete(deleteurl)
            .then(() => res.redirect(`http://localhost:5050/gerenciarcursos`))
            .catch(err => console.log(err));
}


//#Professores

export const CriarProfessor = async(req, res) => {
        const obj = {
            curso: req.body.curso,
            professores: req.body.professores,
            diasdeaula: req.body.diasdeaula,
            horarios:req.body.horarios,
            alunosmatriculados: req.body.alunosmatriculados
        };

        axios.post("http://localhost:5050/api/cursos", obj)
            .then(() => res.redirect(req.originalUrl))
            .catch(err => console.log(err));
}

//#Professores
export const AtualizarProfessor = async (req, res) => {
    
    const obj = {
            id:req.params.id,
            curso: req.body.curso,
            professores: req.body.professores,
            diasdeaula: req.body.diasdeaula,
            horarios:req.body.horarios,
            alunosmatriculados: req.body.alunosmatriculados
    };
    
        const updateurl = `http://localhost:5050/api/cursos/${req.params.id}`
    
        axios.put(updateurl, obj)
            .then(() => res.redirect(`http://localhost:5050/gerenciarcursos`))
            .catch(err => console.log(err));
}
    
   
export const DeletarProfessor = async (req,res) => {
    
    const id = req.params.id;
    console.log(id);
    const deleteurl = `http://localhost:5050/api/cursos/${id}`;
    
        axios.delete(deleteurl)
            .then(() => res.redirect(`http://localhost:5050/gerenciarcursos`))
            .catch(err => console.log(err));
    }