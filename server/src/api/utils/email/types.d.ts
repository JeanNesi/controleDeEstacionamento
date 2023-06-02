export interface IEmailsTemplates {
  template: 'confirmEmail' | 'viewMaintenance';
}
export interface IVariables {
  link: string;
  subject: string;
  text: string;
}

export interface ISendEmail extends IEmailsTemplates {
  toEmail: string;
  subject: string;
  text: string;
  link: string;
}

export interface IHandlerTemplate extends IEmailsTemplates {
  variables: IVariables;
}
