import contactsService from "../models/index.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";


const getAll = async (req, res) => {
  const contactsList = await contactsService.listContacts();
  res.json(contactsList);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const contactById = await contactsService.getContactById(id);
  if (!contactById) {
    throw HttpError(404, `Not found`);
  }
  res.json(contactById);
};

const addNew = async (req, res) => {
  
  const newContact = await contactsService.addContact(req.body);
  res.status(201).json(newContact);
};

const updateById = async (req, res) => {

  const { id } = req.params;

  const updatedContact = await contactsService.updateContact(id, req.body);
  if (!updatedContact) {
    throw HttpError(404, `Not found`);
  }
  res.status(200).json(updatedContact);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await contactsService.removeContact(id);
  if (!deletedContact) {
    throw HttpError(404, `Not found`);
  }
  res.status(200).json({ message: "contact deleted" });
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addNew: ctrlWrapper(addNew),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
