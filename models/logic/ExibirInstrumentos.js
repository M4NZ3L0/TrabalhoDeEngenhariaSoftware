import axios from "axios";
import { Peso, tamanho } from "./formatFunctions.js";

let elements = []
let GetData = async () => {
    const res = await axios.get("http://localhost:5050/api/instrumentos");
    const data = await res.data;

    elements.splice(0, elements.length);
    await data.forEach(e => {
    return elements.push(`<div class="relative w-64 h-96 bg-gradient-to-b from-gray-50 mt-12 mx-4 to-gray-400 rounded-xl shadow-xl">
    <h1 class="pt-4 text-center underline text-4xl font-bold text-gray-900">${e.Nome}</h1>
    <div class="ml-4 mt-4">    
    <h1 class="text-gray-900 mb-2 text-xl">Tipo: ${e.Tipo}</h1>
    <h1 class="text-gray-900 mb-2 text-xl">TamanhoCms: ${(e.TamanhoCms)}</h1>
    <h1 class="text-gray-900 mb-2 text-xl">PesoKgs: ${(e.PesoKgs)}</h1>
    <h1 class="text-gray-900 mb-6 text-xl">Código: ${e.Código}</h1>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-900 absolute bottom-8 right-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
</svg>
    </div>`)
    });
};

GetData();

export default [elements,GetData];