import axios from "axios";

let elements = []
let GetData = async () => {
    const res = await axios.get("http://localhost:5050/api/cursos");
    const data = await res.data;

    elements.splice(0, elements.length);
    await data.forEach(e => {
    return elements.push(`<div class="w-1/4 h-60 bg-white shadow-md bg-gray-50 rounded-xl ml-20 mt-12 relative">
    <h1 class="text-5xl mt-8 ml-8 font-bold text-gray-900">${e.Curso}</h1>
    <p class="text-3xl ml-8 text-gray-700">${e.Professores}</p>
    <p class="text-2xl ml-8  font-bold text-gray-400">${e.DiasDeAula}</p>
    <p class="text-2xl ml-8  font-bold text-gray-400">${e.Horários}</p>
    <p class="text-4xl font-bold text-gray-400 absolute right-4 bottom-2">${e.AlunosMatriculados}</p>
    </div>`)
    });
};

GetData();

export default [elements,GetData];