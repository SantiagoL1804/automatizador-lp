const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path")
// const chalk = require("chalk");

const modifyStaticFile = async (
  lpPathsList,
  htmlContent,
  cssContent,
  jsContent
) => {

  // const landingPages = await fsPromises.readdir(landingPagesDir);
  

  for (let lpPath of lpPathsList) {
    if (htmlContent) {
      const pagePath = path.join(lpPath, "test.html");
      console.log("in controller", pagePath);
      

    // Crea una nueva rama

    // Haz tus modificaciones en los archivos aquí
    // Ejemplo: Agregar un comentario en un archivo

    console.log(fs.readFileSync(pagePath, "utf8"));
    

    await fsPromises.appendFile(
      pagePath,
      htmlContent
    );
    }
    
  }
};

module.exports = { modifyStaticFile };
