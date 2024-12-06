const fsPromises = require("fs").promises;

const path = require("path");

async function searchForFolder(dir, folderName, result = []) {
  const files = await fsPromises.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      if (file.name === folderName) {
        result.push(fullPath);
      } else {
        await searchForFolder(fullPath, folderName, result);
      }
    }
  }

  return result;
}

module.exports = searchForFolder;
