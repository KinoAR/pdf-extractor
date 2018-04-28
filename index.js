const extract = require("pdf-text-extract");
const path = require("path");
const fs = require("fs");
const args = process.argv.slice(2);

const stringListToText = (list) => list.reduce((initial, curr) =>  initial += curr + "\n", "");

extract(path.resolve(args[0]),{splitPages: true}, (err, text) => {
  if(err) {
    console.error(err);
    return;
  } else {
    const data = stringListToText(text);
    fs.writeFileSync(`${args[1]}.txt`,data,"utf8");
  }
})

