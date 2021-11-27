const form = document.querySelector("#CadastrarAluno");

const AdicionarCurso = document.querySelector("#Adicionar");
const Fechar = document.querySelector("#Fechar");
const Deletar = document.querySelector("#DeletarAluno");
const DeletarForm = document.querySelector("#DeletarForm");
const sair = document.querySelector("#sair")

sair.addEventListener("click", () => {
        if (!Deletar.classList.contains("hidden")) {
            Deletar.classList.add("hidden");
        }
});

const DeleteBtn = document.querySelectorAll(".delete");    

            Adicionar.addEventListener("click", () => {
                if (form.classList.contains("hidden")) {
                    form.classList.remove("hidden")
                }
            }, true);

            Fechar.addEventListener("click", () => {
                if (!form.classList.contains("hidden")) {
                    form.classList.add("hidden")
                }
            }, true);

DeleteBtn.forEach(btn => {
    const id = btn.dataset.id;
    btn.addEventListener("click", (e) => {

        DeletarForm.action = "/deletarAluno/" + id;

        if (Deletar.classList.contains("hidden")) {
            Deletar.classList.remove("hidden");
        }

    })
});