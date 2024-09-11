const {select} = require('@inquirer/prompts')

const start = async() => {

    while(true){

        const opcao = await select({
            menssage: "Menu >",
            choices: [
                {
                    name: "Cadastrar metas",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "sair",
                    value: "sair"
                },
            ]
        })

        switch(opcao){
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
    }
}

start()