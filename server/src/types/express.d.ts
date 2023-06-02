// A tipagem do express deve ser a mesma do token
declare namespace Express {
  export interface Request {
    user: {
      id: string;
      permissions: {
        id: string;
        name: string;

        subPermissions: {
          id: string;
          name: string;
        }[];
      }[];
    };
  }
}
