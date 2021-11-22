import axios from "axios";

let elements = []
let GetData = async () => {
    const res = await axios.get("http://localhost:5050/api/professores");
    const data = await res.data;
    
    elements.splice(0, elements.length);

    await data.forEach(e => {
    return elements.push(`<div>
    <h1>Nome:${e.Nome}</h1>
    <h1>Email:${e.Email}</h1>
    <h1>DataDeNascimento:${e.DataDeNascimento}</h1>
    <h1>Endereço:${e.Endereço}</h1>
    <h1>Telefone:${e.Telefone}</h1>
    <h1>RG:${e.RG}</h1>    
    <h1>CPF:${e.CPF}</h1>
    <h1>Professor:${e.Professor}</h1>
    <h1>Admin:${e.Admin}</h1>
    <h1>Turma:${e.Turma}</h1>
    <h1>Curso:${e.Curso}</h1>
    </div>`)
    });
};

GetData();

export default [elements,GetData];