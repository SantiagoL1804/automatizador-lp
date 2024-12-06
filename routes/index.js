const { Router } = require("express");
const router = Router();
const lpSearcher = require("../middlewares/landingPageSearcher");

const staticFilesConent = require("../apiServices/staticFilesConent/routes");


//router.use(generateTestUsername);
//router.use("/refresh", refresh);
// router.use(generateAccesTokenInRequest);
router.use(lpSearcher);

router.use("/staticFilesConent", staticFilesConent);


//router.use

module.exports = router;
