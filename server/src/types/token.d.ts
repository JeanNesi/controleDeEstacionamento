// A tipagem do token deve ser a mesma do express

export interface IPermissions {
  id: string;
  name: string;

  subPermissions: {
    id: string;
    name: string;
  }[];
}

// deve ser igual ao IPermissions, mas manter os isPermited
export interface IPermissionsToValidate {
  id: string;
  name: string;
  isPermited?: boolean;

  subPermissions: {
    id: string;
    name: string;
    isPermited?: boolean;
  }[];
}

export interface IToken {
  user: {
    id: string;
    permissions: IPermissions[];
  };
}
