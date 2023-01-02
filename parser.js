const fs = require("fs");

module.exports = {
  parsedData: function () {
    const file = fs.readFileSync("text.txt").toString();

    const array = file.split("\n");

    const cleanedData = array.map((value) => {
      const trimmedStrStart = value.trimStart();
      const trimmedStrEnd = trimmedStrStart.trimEnd();
      return trimmedStrEnd
        .replace(".mp3", "")
        .replace("www.livingelectro.com", "");
    });
    return cleanedData;
  },
};
