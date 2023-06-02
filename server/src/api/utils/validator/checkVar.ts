/* eslint-disable valid-typeof */
import { ErrorMessage } from '../error/ErrorMessage';
import { ICheckVar } from './types';

export const checkVar = (Vars: ICheckVar[]) => {
  for (let i = 0; i < Vars.length; i++) {
    if (!Vars[i].isOptional && (Vars[i].variable === null || Vars[i].variable === undefined)) {
      throw new ErrorMessage({
        statusCode: 400,
        message: `Verifique a informação: ${Vars[i].label} e tente novamente.`,
      });
    }

    if (Vars[i].variable && typeof Vars[i].variable !== Vars[i].type) {
      throw new ErrorMessage({
        statusCode: 400,
        message: `Verifique o tipo da informação: ${Vars[i].label} e tente novamente.`,
      });
    }
  }
};
