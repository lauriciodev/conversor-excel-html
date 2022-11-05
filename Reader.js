const fs = require("fs");
const util = require("util");

// função nova com promise util.promisify(função velha com callback)

class Reader {
  constructor() {
    this.reader = util.promisify(fs.readFile);
    //agora a função "readFile" poderá retornar usando async await
  }

  async read(filepath) {
    try {
      return await this.reader(filepath, "utf8");
    } catch (erro) {
      return undefined;
    }
  }
}

module.exports = Reader;
