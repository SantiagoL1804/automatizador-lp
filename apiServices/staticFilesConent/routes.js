const { Router } = require("express");
const router = Router();

const controller = require("./controller.js");

router.put("/", async (req, res) => {
  const { lpPathsList, htmlContent, cssContent, jsContent } = req.body;

  
  try {
    
    await controller.modifyStaticFile(
      lpPathsList,
      htmlContent,
      cssContent,
      jsContent
    );
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
});

module.exports = router;
