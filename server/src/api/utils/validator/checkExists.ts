/* eslint-disable valid-typeof */
import { ErrorMessage } from '../error/ErrorMessage';
import { ICheckExistsAndNot } from './types';

export const checkExists = (Vars: ICheckExistsAndNot[]) => {
  for (let i = 0; i < Vars.length; i++) {
    if (Vars[i].variable === null || Vars[i].variable === undefined) {
      throw new ErrorMessage({
        statusCode: 400,
        message: `A informação: ${Vars[i].label} não existe na base de dados.`,
      });
    }
  }
};
