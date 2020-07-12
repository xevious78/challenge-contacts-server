import Database from "../db/db";
import fs from "fs";
import upload from "../middleware/upload";

const router = require("express-promise-router")();
export default router;

router.post("/", upload.single("image"), async (req, res) => {
  const file = req.file;
  console.log(file);
  if (!file) {
    return res.status(400).send();
  }

  const imageId = await Database.createImage(file);
  return res.send({ imageId: imageId });
});

router.get("/:imageId", async (req, res) => {
  const { imageId } = req.params;
  const file = await Database.getImage(imageId);

  if (!file) {
    return res.status(404).send();
  }

  fs.createReadStream(file.path).pipe(res);
});
