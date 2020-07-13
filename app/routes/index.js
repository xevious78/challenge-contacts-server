import contact from "./contact";
import image from "./image";

const router = require("express-promise-router")();
export default router;

router.use("/contact", contact);
router.use("/image", image);
