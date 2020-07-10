import Database from "../db/db";

const router = require("express-promise-router")();
export default router;

/* Get contacts list */
router.get("/", async (req, res) => {
  const contacts = await Database.getContacts();

  return res.send({
    contacts: contacts,
  });
});

/* Get contact */
router.get("/:contactId", async (req, res) => {
  const { contactId } = req.params;

  const contact = await Database.getContact(contactId);

  if (!contact) {
    return res.status(404).send({
      error_code: "CONTACT_DOES_NOT_EXIST",
    });
  }

  return res.send({
    contact: contact,
  });
});

/* Create contact */
router.post("/", async (req, res) => {
  const { contactInfos } = req.body;

  const contact = await Database.createContact(contact, contactInfos);

  return res.send({ contact: contact });
});

/* Delete contact */
router.delete("/:contactId", async (req, res) => {
  const { contactId } = req.params;
  
  await Database.deleteContact(contactId);

  return res.send("ok");
});

/* Modify contact */
router.put("/:contactId", async (req, res) => {
  const { contactId } = req.params;
  const { contactInfos } = req.body;

  if (contact.id != contactId) {
    return res.sendStatus(400);
  }

  const contact = await Database.updateContact(contactId, contactInfos);
  return res.send({ contact: contact });
});
