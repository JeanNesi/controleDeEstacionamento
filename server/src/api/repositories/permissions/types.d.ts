export interface ICreateManyPermissions {
  data: {
    name: string;
  }[];
}

export interface IFindPermissionByName {
  name: string;
}

export interface ICheckPermission {
  checkCRUD?: {
    create?: boolean;
    edit?: boolean;
    view?: boolean;
    delete?: boolean;
  };
  permission: 'admin';
  Permissions: {
    Permission: {
      id: string;
      name: string;
    };
    create: boolean;
    edit: boolean;
    view: boolean;
    delete: boolean;
  }[];
}
