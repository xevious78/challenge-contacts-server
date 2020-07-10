import contacts from "./contacts";

const router = require("express-promise-router")();
export default router;

router.use("/contacts", contacts);

