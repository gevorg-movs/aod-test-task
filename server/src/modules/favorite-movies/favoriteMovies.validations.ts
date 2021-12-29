import { checkSchema } from "express-validator";
import validationHandler from "../../validations/handler";
import validationMessages from "../../validations/messages";
import multer from "multer";

export const createMovieValidations = [
  multer().single("poster"),
  checkSchema({
    title: {
      isString: {
        errorMessage: validationMessages.string("title"),
      },
      notEmpty: {
        errorMessage: validationMessages.empty("title"),
      },
    },
    description: {
      isString: {
        errorMessage: validationMessages.string("description"),
      },
      notEmpty: {
        errorMessage: validationMessages.empty("description"),
      },
    },
    rating: {
      isInt: {
        options: { min: 0, max: 10 },
        errorMessage: validationMessages.between("rating", 0, 10),
      },
      notEmpty: {
        errorMessage: validationMessages.empty("rating"),
      },
    },
    // poster: {
    //    custom: {
    //       options: (value: CustomValidator, {req}) => !!req.file || true,
    //       errorMessage: validationMessages.type('poster', 'image')
    //    }
    // },
    actors: {
      isArray: {
        errorMessage: validationMessages.array("actors"),
      },
      notEmpty: {
        errorMessage: validationMessages.empty("actors"),
      },
    },
  }),
  validationHandler,
];

