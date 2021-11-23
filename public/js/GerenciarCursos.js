const form = document.querySelector("#CadastrarCurso")

const AdicionarCurso = document.querySelector("#Adicionar");
const Fechar = document.querySelector("#Fechar");

Adicionar.addEventListener("click", () => {
    if(form.classList.contains("hidden"))
    {
        form.classList.remove("hidden")
    }
},true);

Fechar.addEventListener("click", () => {
    if(!form.classList.contains("hidden"))
    {
        form.classList.add("hidden")
    }
}, true);

