import Joi from "joi";


const errorMessage = {
  "any.required": `missing required name field`,
};

export const contactAddSchema = Joi.object({
  name: Joi.string().required().messages(errorMessage),
  email: Joi.string().required().messages(errorMessage),
  phone: Joi.string().required().messages(errorMessage),
});

