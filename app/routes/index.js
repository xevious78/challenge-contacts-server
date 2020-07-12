import contacts from "./contacts";
import image from "./image";

const router = require("express-promise-router")();
export default router;

router.use("/contacts", contacts);
router.use("/image", image);
