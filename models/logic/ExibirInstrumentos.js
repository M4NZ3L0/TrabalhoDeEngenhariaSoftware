import axios from "axios";

let elements = []
let GetData = async () => {
    const res = await axios.get("http://localhost:5050/api/instrumentos");
    const data = await res.data;

    elements.splice(0, elements.length);
    await data.forEach(e => {
    return elements.push(`<div>
    <h1>Imagem:${e.Imagem}</h1>
    <h1>Nome:${e.Nome}</h1>
    <h1>Código:${e.Código}</h1>
    <h1>Tipo:${e.Tipo}</h1>
    <h1>TamanhoCms:${e.TamanhoCms}</h1>
    <h1>PesoKgs:${e.PesoKgs}</h1
    </div>`)
    });
};

GetData();

export default [elements,GetData];