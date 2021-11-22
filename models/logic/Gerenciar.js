import axios from "axios";

let AlunosRender = [];
let ProfessoresRender = [];
let InstrumentosRender = [];
let CursosRender = [];
let GetAlunos = async () => {
    const res = await axios.get("http://localhost:5050/api/alunos");
    const data = await res.data;

    AlunosRender.splice(0, AlunosRender.length);
    
    await data.forEach(e => {
        return AlunosRender.push(`<tr>
                        <td id="id">${e.id}</td>
                        <td id="nome">${e.Nome}</td>
                        <td id="email">${e.Email}</td>
                        <td id="datadenascimento">${e.DataDeNascimento}</td>
                        <td id="endereço">${e.Endereço}</td>
                        <td id="telefone">${e.Telefone}</td>
                        <td id="cpf">${e.CPF}</td>
                        <td id="rg">${e.RG}</td>
                        <td id="vencimentopagamento">${e.VencimentoDoPagamento}</td>
                        <td id="curso">${e.Curso}</td>
                        <td id="turma">${e.Turma}</td>
                        <td>
                        <div>
                        <a href="atualizaraluno/${e.id}">Atualizar</a>
                        <a href="" data-id="${e.id}">Deletar</a>
                        </div>
                        </td>
                    </tr>`)
    });
};

let GetProfessores = async () => {
    const res = await axios.get("http://localhost:5050/api/professores");
    const data = await res.data;

    ProfessoresRender.splice(0, ProfessoresRender.length);
    
    await data.forEach(e => {
        return ProfessoresRender.push(`<div>
    <p id="id">${e.id}</p>
                        <p id="nome">${e.Nome}</p>
                        <p id="email">${e.Email}</p>
                        <p id="datadenascimento">${e.DataDeNascimento}</p>
                        <p id="endereço">${e.Endereço}</p>
                        <p id="telefone">${e.Telefone}</p>
                        <p id="cpf">${e.CPF}</p>
                        <p id="rg">${e.RG}</p>
                        <p id="vencimentopagamento">${e.VencimentoDoPagamento}</p>
                        <p id="curso">${e.Curso}</p>
                        <p id="turma">${e.Turma}</p>
                    </div>`)
    });
};

let GetCursos = async () => {
    const res = await axios.get("http://localhost:5050/api/cursos");
    const data = await res.data;

    CursosRender.splice(0, CursosRender.length);

    await data.forEach(e => {
        return CursosRender.push(`<div>>
    <p id="id">${e.id}</p>
                        <p id="curso">${e.Curso}</p>
                        <p id="professores">${e.Professores}</p>
                        <p id="horários">${e.Horários}</p>
                        <p id="alunosmatriculados">${e.AlunosMatriculados}</p>
                    </div>`)
    });
};

let GetInstrumentos = async () => {
    const res = await axios.get("http://localhost:5050/api/instrumentos");
    const data = await res.data;

    InstrumentosRender.splice(0, InstrumentosRender.length);

    await data.forEach(e => {
        return InstrumentosRender.push(`<div>
    <p id="id">${e.id}</p>
                        <p id="nome">${e.Nome}</p>
                        <p id="imagem">${e.Imagem}</p>
                        <p id="codigo">${e.Código}</p>
                        <p id="tipo">${e.Tipo}</p>
                        <p id="tamanhocms">${e.TamanhoCms}</p>
                        <p id="pesokgs">${e.PesoKgs}</p>
                    </div>`)
    });
};

export default {alunos:AlunosRender,cursos:CursosRender,instrumentos:InstrumentosRender,professores:ProfessoresRender,FunçãoAlunos:GetAlunos,FunçãoProfessores:GetProfessores,FunçãoCursos:GetCursos,FunçãoInstrumentos:GetInstrumentos};