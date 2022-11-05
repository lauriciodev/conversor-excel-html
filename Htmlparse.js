let ejs = require("ejs");

class HtmlParser {
  static async Parse(table) {
    return await ejs.renderFile("./table.ejs", { header: table.header });
  }
}

module.exports = HtmlParser;
