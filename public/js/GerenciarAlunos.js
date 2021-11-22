const Form = document.querySelector('#CadastrarPessoa');

const Adicionar = document.querySelector("#Adicionar");
const Fechar = document.querySelector("#Close");

Fechar.addEventListener("click", () => {
    if (!Form.classList.contains("hidden")) {
        Form.classList.add("hidden");
    }
})

let GerarAdicionar = function () {
    if (Form.classList.contains("deletar") || Form.classList.contains("modificar")) {
        Form.classList.remove("deletar");
        Form.classList.remove("modificar");
    }
    Form.classList.add("criar");

    if (Form.classList.contains("hidden")) {
        Form.classList.remove("hidden");
    }


}

Adicionar.addEventListener("click", GerarAdicionar, true);