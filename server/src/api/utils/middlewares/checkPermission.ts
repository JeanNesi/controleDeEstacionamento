/* eslint-disable no-param-reassign */
import { IPermissionsToValidate } from '../../../types/token';
import { ErrorMessage } from '../error';

interface ICheckPermission {
  toCheck: {
    permission: string;
    subPermission?: string[];
  };

  permissions: IPermissionsToValidate[];
}

export function checkPermission({ toCheck, permissions }: ICheckPermission) {
  // #region CHECKS
  if (!toCheck || !permissions.length) {
    throw new ErrorMessage({
      statusCode: 401,
      message: 'Permissões inválidas.',
    });
  }
  // #endregion

  const permissionBase = permissions.find((permission) => permission.name === toCheck.permission);

  if (!permissionBase) {
    throw new ErrorMessage({ statusCode: 401, message: 'Permissão de acesso inválida.' });
  }

  const subPermissionIsValid = toCheck.subPermission?.every((toCheckSubPermission) =>
    permissionBase.subPermissions.find(
      (subPermission) => toCheckSubPermission === subPermission.name,
    ),
  );

  if (!subPermissionIsValid) {
    throw new ErrorMessage({ statusCode: 401, message: 'Permissão de acesso inválida.' });
  }
}
