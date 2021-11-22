import axios from "axios";

let elements = []
let GetData = async () => {
    const res = await axios.get("http://localhost:5050/api/professores");
    const data = await res.data;
    
    elements.splice(0, elements.length);

    await data.forEach(e => {
        return elements.push(`<div class="relative w-96 h-56 mt-12 mx-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl">
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-4 right-4 h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
</svg>
    <h1 class="text-2xl text-white ml-4 mb-3 pt-6 font-bold">${e.Nome}</h1>
    <h1 class="text-white text-xl ml-4 mb-2">Email:${e.Email}</h1>
    <h1 class="text-white ml-4 mb-2">${"(" + e.Telefone.slice(0,2) + ") " + e.Telefone.slice(2,7) + "." + e.Telefone.slice(7,11)}</h1>
    <h1 class="text-white ml-4 ">Turma: <b>${e.Turma}</b></h1>
    <h1 class="text-white text-xl font-semibold absolute bottom-6 right-8">${e.Curso}</h1>
    </div>`)
    });
};

GetData();

export default [elements,GetData];