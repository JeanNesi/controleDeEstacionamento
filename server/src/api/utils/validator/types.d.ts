export interface ICheckVar {
  variable: any;
  label: string;
  type: 'string' | 'number' | 'boolean';
  isOptional?: boolean;
}

export interface ICheckExistsAndNot {
  label: string;
  variable: any;
}
