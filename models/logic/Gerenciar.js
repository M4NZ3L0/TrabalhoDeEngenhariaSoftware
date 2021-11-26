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
                        <td class="text-center text-gray-800 text-blue-900 font-semibold" id="id">${e.id}</td>
                        <td class="text-center text-gray-800 text-blue-900 font-semibold" id="nome">${e.Nome}</td>
                        <td class="text-center text-gray-800 text-blue-900 font-semibold" id="email">${e.Email}</td>
                        <td class="text-center text-gray-800 text-blue-900 font-semibold" id="datadenascimento">${e.DataDeNascimento.slice(0,10)}</td>
                        <td class="text-center text-gray-800 text-blue-900 font-semibold" id="endereço">${e.Endereço}</td>
                        <td class="text-center text-gray-800 text-blue-900 font-semibold" id="telefone">${e.Telefone}</td>
                        <td class="text-center text-gray-800 text-blue-900 font-semibold" id="cpf">${e.CPF.slice(0,3) + "." + e.CPF.slice(3,6) + "." + e.CPF.slice(6,9) + "-" + e.CPF.slice(9,11) }</td>
                        <td class="text-center text-gray-800 text-blue-900 font-semibold" id="rg">${e.RG.slice(0,2) + "." + e.RG.slice(2,5) + "." + e.RG.slice(5,3) + "-" + e.CPF.slice(9) }</td>
                        <td class="text-center text-gray-800 text-blue-900 font-semibold" id="vencimentopagamento">${e.VencimentoDoPagamento.slice(0,10)}</td>
                        <td class="text-center text-gray-800 text-blue-900 font-semibold" id="curso">${e.Curso}</td>
                        <td class="text-center text-gray-800 text-blue-900 font-semibold" id="turma">${e.Turma}</td>
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
    <td id="id">${e.id}</td>
                        <td id="nome">${e.Nome}</td>
                        <td id="email">${e.Email}</td>
                        <td id="datadenascimento">${e.DataDeNascimento.slice(0,10)}</td>
                        <td id="endereço">${e.Endereço}</td>
                        <td id="telefone">${e.Telefone.slice(0,2) + "." + e.Telefone.slice(2,7) + "-" + e.Telefone.slice(7,11)}</td>
                        <td id="cpf">${e.CPF.slice(0,3) + "." + e.CPF.slice(3,6) + "." + e.CPF.slice(6,9) + "-" + e.CPF.slice(9,11) }</td>
                        <td id="rg">${e.RG.slice(0,2) + "." + e.RG.slice(2,5) + "." + e.RG.slice(5,3) + "-" + e.CPF.slice(9) }</td>
                        <td id="vencimentopagamento">${e.VencimentoDoPagamento}</td>
                        <td id="curso">${e.Curso}</td>
                        <td id="turma">${e.Turma}</td>
                    </div>`)
    });
};

let GetCursos = async () => {
    const res = await axios.get("http://localhost:5050/api/cursos");
    const data = await res.data;

    CursosRender.splice(0, CursosRender.length);

    await data.forEach(e => {
        return CursosRender.push(`<tr class="bg-gray-100">
                        <td class="text-center text-gray-900 font-bold" id="id">${e.id}</td>
                        <td class="text-center text-gray-800" id="curso">${e.Curso}</td>
                        <td class="text-center text-gray-800" id="professores">${e.Professores}</td>
                        <td class="text-center text-gray-800" id="diasdeaula">${e.DiasDeAula}</td>
                        <td class="text-center text-gray-800" id="horários">${e.Horários.slice(0,2) + ":" + e.Horários.slice(2,4)}</td>
                        <td class="text-center text-gray-800" id="alunosmatriculados">${e.AlunosMatriculados}</td>
                        <td>
                        <div class="flex justify-center items-center">
                        <a class="m-4" href="atualizarCurso/${e.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
</svg></a>
                        <button class="m-4 delete" data-id="${e.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg></button>
                        </div>
                        </td>
                    </tr>`)
    });
};

let GetInstrumentos = async () => {
    const res = await axios.get("http://localhost:5050/api/instrumentos");
    const data = await res.data;

    InstrumentosRender.splice(0, InstrumentosRender.length);

    await data.forEach(e => {
        return InstrumentosRender.push(`<tr class="bg-gray-100">
    <td class="text-center text-gray-900 font-bold" id="id">${e.id}</td>
                        <td class="text-center text-gray-800" id="nome">${e.Nome}</td>
                        <td class="text-center text-gray-800" id="codigo">${e.Código}</td>
                        <td class="text-center text-gray-800" id="tipo">${e.Tipo}</td>
                        <td class="text-center text-gray-800" id="tamanhocms">${e.TamanhoCms}</td>
                        <td class="text-center text-gray-800" id="pesokgs">${e.PesoKgs}</td>
                        <td><div class="flex justify-center items-center">
                        <a class="m-4" href="atualizarInstrumento/${e.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
</svg></a>
                        <button class="m-4 delete" data-id="${e.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg></button>
                        </div></td>
                    </tr>`)
    });
};

export default {
    alunos: AlunosRender,
    cursos: CursosRender,
    instrumentos: InstrumentosRender,
    professores: ProfessoresRender,
    FunçãoAlunos: GetAlunos,
    FunçãoProfessores: GetProfessores,
    FunçãoCursos: GetCursos,
    FunçãoInstrumentos: GetInstrumentos
};