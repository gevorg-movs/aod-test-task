import {InputError} from "../src/store/reducers/auth/types";

export interface ValidationErrors {
   [key: string]: InputError
}