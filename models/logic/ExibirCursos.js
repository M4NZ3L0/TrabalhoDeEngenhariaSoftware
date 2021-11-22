import axios from "axios";

let elements = []
let GetData = async () => {
    const res = await axios.get("http://localhost:5050/api/cursos");
    const data = await res.data;

    elements.splice(0, elements.length);
    await data.forEach(e => {
    return elements.push(`<div class="w-1/4 h-56 bg-white shadow-md bg-indigo-50 rounded-xl ml-20 mt-12 relative">
    <h1 class="text-5xl mt-8 ml-8 font-bold text-blue-900">${e.Curso}</h1>
    <p class="text-3xl ml-8 text-blue-500">${e.Professores}</p>
    <p class="text-2xl ml-8  font-bold text-blue-200">${e.DiasDeAula}</p>
    <p class="text-2xl ml-8  font-bold text-blue-200">${e.Horários.slice(0,2) + ":" + e.Horários.slice(2,4)}</p>
    <p class="text-4xl font-bold text-blue-400 absolute right-4 bottom-2">${e.AlunosMatriculados}</p>
    </div>`)
    });
};

GetData();

export default [elements,GetData];