let Reader = require("./Reader");
let Processor = require("./Processor");
let Table = require("./Table");
let HtmlParser = require("./Htmlparse");

let leitor = new Reader();

async function main() {
  let dados = await leitor.read("./planilha.csv");
  let dadosProcessados = Processor.Process(dados);
  let usuarios = new Table(dadosProcessados);

  let html = await HtmlParser.Parse(usuarios);
  console.log(html);
}

main();
