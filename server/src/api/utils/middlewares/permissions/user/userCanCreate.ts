import { NextFunction, Request, Response } from 'express';
import { checkPermission } from '../../checkPermission';

export async function userCanCreate(req: Request, _res: Response, next: NextFunction) {
  const { permissions } = req.user;

  checkPermission({
    toCheck: {
      permission: 'user',
      subPermission: ['create', 'read'], // opcional
    },
    permissions,
  });

  next();
}
