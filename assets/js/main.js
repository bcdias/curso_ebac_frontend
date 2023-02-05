$(document).ready(function () {


    $("[data-formulario]").submit(function (event) {
        event.preventDefault();

        const inputTarefa = $("[data-input]").val()

        // Cria item
        let item = $(`  <li class="d-flex align-items-center w-100 border-bottom border-success">
                            <p class="text-start w-75 h-100 mb-0 fs-5">${inputTarefa}</p>
                        </li>`
        )

        // Botão tarefa concluída
        const botaoConcluir = $("<button/>", {
            "class": "btn btn-outline-warning",
            type: "button",
            text: "Concluir",
            click: function (event) {

                let botaoConcluir =  $(event.target)

                // deixa bota amarelo
                $(botaoConcluir).toggleClass("btn-warning btn-outline-warning")

                // Adiciona risco ao texto
                let texto = $(botaoConcluir).parent().children().get(0);
                $(texto).toggleClass("text-decoration-line-through btn-warning")
            }
        })

        // Botão deletar tarefa
        const botaoDeletar = $("<button/>", {
            "class": "btn btn-outline-danger m-lg-2",
            text: "Deletar",
            click: function (event) {
                
                $(event.target).parent().remove()
            }
        })

        // Adiciona botão concluir
        botaoConcluir.appendTo(item)

        // Adiciona botão deletar
        botaoDeletar.appendTo(item)

        // Adiciona item a lista
        item.appendTo("[data-listaDeTarefas]")
        $("[data-input]").val("")
        
    });
});