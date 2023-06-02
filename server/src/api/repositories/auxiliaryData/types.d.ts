export interface IAuxiliaryData {
  permissions: {
    id: string;
    name: string;
    subPermissions: {
      id: string;
      name: string;
    }[];
  }[];
}
