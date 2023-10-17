import Contact from "../models/Contact.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res) => {
  const contactsList = await Contact.find();
  res.json(contactsList);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const contactById = await Contact.findById(id);
  if (!contactById) {
    throw HttpError(404, `Not found`);
  }
  res.json(contactById);
};

const add = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

const updateById = async (req, res) => {
  const { id } = req.params;

  const updatedContact = await Contact.findByIdAndUpdate(id, req.body);
   if (!updatedContact) {
    throw HttpError(404, `Not found`);
  }
  res.status(200).json(updatedContact);
};

const updateFavoriteById = async (req, res) => {
  const { id } = req.params;

  const updatedContact = await Contact.findByIdAndUpdate(id, req.body);
  
  if (!updatedContact) {
    throw HttpError(404, `Not found`);
  }
  res.status(200).json(updatedContact);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) {
    throw HttpError(404, `Not found`);
  }
  res.status(200).json({ message: "contact deleted" });
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateFavoriteById: ctrlWrapper(updateFavoriteById),
  deleteById: ctrlWrapper(deleteById),
};
