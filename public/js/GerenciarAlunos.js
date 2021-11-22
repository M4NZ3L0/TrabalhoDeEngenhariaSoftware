const Form = document.querySelector('#CadastrarPessoa');

const Adicionar = document.querySelector("#Adicionar");
const Modificar = document.querySelector("#Modificar");
const Deletar = document.querySelector("#Deletar");

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

let GerarModificar = function () {
    if (Form.classList.contains("deletar") || Form.classList.contains("criar")) {
        Form.classList.remove("deletar");
        Form.classList.remove("criar");
    }
    Form.classList.add("modificar");

    if (Form.classList.contains("hidden")) {
        Form.classList.remove("hidden");
    }

}

let GerarDeletar = function () {
    if (Form.classList.contains("modificar") || Form.classList.contains("criar")) {
        Form.classList.remove("modificar");
        Form.classList.remove("criar");
    }
    Form.classList.add("deletar");
    if (Form.classList.contains("hidden")) {
        Form.classList.remove("hidden");
    }

}

Adicionar.addEventListener("click", GerarAdicionar, true);
Modificar.addEventListener("click", GerarModificar, true);
Deletar.addEventListener("click", GerarDeletar, true);