import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import { isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import {contactAddSchema}  from "../../schemas/contacts-schemas.js";

const contactAddValidate = validateBody(contactAddSchema);

const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getById);

router.post("/", isEmptyBody, contactAddValidate, contactsController.addNew);

router.put(
  "/:id",
  isEmptyBody,
  contactAddValidate,
  contactsController.updateById
);

router.delete("/:id", contactsController.deleteById);

export default router;
