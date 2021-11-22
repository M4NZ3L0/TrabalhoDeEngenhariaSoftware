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
                        <td class="text-center text-blue-900 font-semibold" id="id">${e.id}</td>
                        <td class="text-center text-blue-900 font-semibold" id="nome">${e.Nome}</td>
                        <td class="text-center text-blue-900 font-semibold" id="email">${e.Email}</td>
                        <td class="text-center text-blue-900 font-semibold" id="datadenascimento">${e.DataDeNascimento.slice(0,10)}</td>
                        <td class="text-center text-blue-900 font-semibold" id="endereço">${e.Endereço}</td>
                        <td class="text-center text-blue-900 font-semibold" id="telefone">${e.Telefone}</td>
                        <td class="text-center text-blue-900 font-semibold" id="cpf">${e.CPF.slice(0,3) + "." + e.CPF.slice(3,6) + "." + e.CPF.slice(6,9) + "-" + e.CPF.slice(9,11) }</td>
                        <td class="text-center text-blue-900 font-semibold" id="rg">${e.RG.slice(0,2) + "." + e.RG.slice(2,5) + "." + e.RG.slice(5,3) + "-" + e.CPF.slice(9) }</td>
                        <td class="text-center text-blue-900 font-semibold" id="vencimentopagamento">${e.VencimentoDoPagamento.slice(0,10)}</td>
                        <td class="text-center text-blue-900 font-semibold" id="curso">${e.Curso}</td>
                        <td class="text-center text-blue-900 font-semibold" id="turma">${e.Turma}</td>
                        <td>
                        <div class="flex justify-center items-center">
                        <a class="m-4" href="atualizarAluno/${e.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
</svg></a>
                        <a class="delete m-4" data-id="${e.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg></a>
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
                        <p id="datadenascimento">${e.DataDeNascimento.slice(0,10)}</p>
                        <p id="endereço">${e.Endereço}</p>
                        <p id="telefone">${e.Telefone.slice(0,2) + "." + e.Telefone.slice(2,7) + "-" + e.Telefone.slice(7,11)}</p>
                        <p id="cpf">${e.CPF.slice(0,3) + "." + e.CPF.slice(3,6) + "." + e.CPF.slice(6,9) + "-" + e.CPF.slice(9,11) }</p>
                        <p id="rg">${e.RG.slice(0,2) + "." + e.RG.slice(2,5) + "." + e.RG.slice(5,3) + "-" + e.CPF.slice(9) }</p>
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