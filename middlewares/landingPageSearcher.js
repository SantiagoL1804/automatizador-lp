const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const searchForFolder = require("../script/folderSearch");

const lpDirPath = path.join(__dirname, "../", "staticFilesTest");

const lpSearcher = async (req, res, next) => {
  const { houseName } = req.body;

  const lpPathsList = await searchForFolder(lpDirPath, houseName);

  if (!lpPathsList.length)
    res.status(400).send(`No folders with name ${houseName}`);

  req.body.lpPathsList = lpPathsList;
  next();
};

module.exports = lpSearcher;
