const fs = require("fs");

const writeNewObject = (nome, idade, cargo) => {
  fs.readFile(
    "./lendo-escrevendo_json/user.json",
    { encoding: "utf-8" },
    (erro, dados) => {
      if (erro) {
        console.log(erro);
      } else {
        var conteudo = JSON.parse(dados);

        conteudo.nome = nome;
        conteudo.idade = idade;
        conteudo.cargo = cargo;

        fs.writeFile(
          "./lendo-escrevendo_json/user.json",
          JSON.stringify(conteudo),
          (erro) => {
            if (erro) {
              console.log("erros acontecem");
            }
          }
        );
      }
    }
  );
};

writeNewObject("jhuanito jones", 12, "aventureiro");
