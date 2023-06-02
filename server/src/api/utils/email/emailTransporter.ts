// #region IMPORTS
import { createTransport } from 'nodemailer';
import { templateExample } from './templates/templateExample';
import { ITemplateExample } from './templates/types';
import { sendErrorToServerLog } from '../error/sendErrorToServerLog';
import 'dotenv/config';

// #endregion

// #region CONFIG
const transporter = createTransport({
  host: 'smtp.mail.us-west-2.awsapps.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});
// #endregion

export const sendTemplateExample = async ({
  subject,
  toEmail,
  attachments,
  field1,
  field2,
  field3,
}: ITemplateExample) => {
  const mail = {
    from: `${subject} <${process.env.EMAIL_USERNAME}>`,
    to: toEmail,
    subject: `Ada Software House - ${subject}`,
    attachments,
    html: templateExample({
      toEmail,
      subject,
      field1,
      field2,
      field3,
    }),
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    sendErrorToServerLog(error);
  }
};
