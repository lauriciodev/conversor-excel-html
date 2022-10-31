const fs = require("fs");

//lendo arquivos

/* fs.readFile("./nome.rub", { encoding: "utf-8" }, (erro, dados) => {
  if (erro) {
    console.log("ocorreu um erro durante a leitura :D");
  } else {
    console.log(dados);
  }
}); */

fs.writeFile("./nome.rub", "lauricio é um bom programador!", (erro) => {
  if (erro) {
    console.log("erro seu fi da peste!");
  }
});
