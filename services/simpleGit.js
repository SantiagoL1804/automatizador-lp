const simpleGit = require("simple-git");

// Inicializa simple-git
const git = simpleGit();

async function gitPreworkHandler() {
  await git.pull("origin", `main`);

  await git.checkoutLocalBranch(`cambio-${page}`);
}

async function gitCommandsHandler() {
  // Añade y commit los cambios
  await git.add("./*");
  await git.commit(`Automatizado: Cambio en ${page}`);

  // Push a la nueva rama
  await git.push("origin", `cambio-${page}`);
}
