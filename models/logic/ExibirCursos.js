import axios from "axios";

let elements = []
let GetData = async () => {
    const res = await axios.get("http://localhost:5050/api/cursos");
    const data = await res.data;

    elements.splice(0, elements.length);
    await data.forEach(e => {
    return elements.push(`<div>
    <h1>Curso:${e.Curso}</h1>
    <h1>Professores:${e.Professores}</h1>
    <h1>Horários:${e.Horários}</h1>
    <h1>AlunosMatriculados:${e.AlunosMatriculados}</h1>
    </div>`)
    });
};

GetData();

export default [elements,GetData];