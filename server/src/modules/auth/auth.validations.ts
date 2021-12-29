import { checkSchema } from "express-validator";
import validationHandler from "../../validations/handler";
import validationMessages from "../../validations/messages";

export const registerValidations = [
  checkSchema({
    email: {
      isEmail: {
        errorMessage: validationMessages.email("email"),
      },
    },
    name: {
      isString: {
        errorMessage: validationMessages.string("description"),
      },
      exists: {
        errorMessage: validationMessages.required("name"),
      },
    },
    password: {
      notEmpty: {
        errorMessage: validationMessages.required("password"),
      },
      isLength: {
        options: { min: 6 },
        errorMessage: validationMessages.min("password", 6),
      },
    },
  }),
  validationHandler,
];

export const loginValidations = [
  checkSchema({
    email: {
      isEmail: {
        errorMessage: validationMessages.email("email"),
      },
    },
    password: {
      notEmpty: {
        errorMessage: validationMessages.required("password"),
      },
    },
  }),
  validationHandler,
];