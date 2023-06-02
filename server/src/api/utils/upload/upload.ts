/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'dotenv/config';
import aws from 'aws-sdk';
import path from 'path';
import multer from 'multer';
import s3Storage from 'multer-sharp-s3';

import { Response, Request } from 'express';
import { ErrorMessage } from '../error';

export const upload = async (req: Request, res: Response) => {
  const s3bucket = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-west-2',
  });

  const fileUpload = multer({
    storage: s3Storage({
      s3: s3bucket,
      Bucket: process.env.AWS_S3_BUCKET,
      ACL: 'public-read',
      withMetadata: true,
      Key(_req: Request, file: any, cb: any) {
        cb(
          null,
          `${path.basename(
            file.originalname,
            path.extname(file.originalname),
          )}-${Date.now()}${path.extname(file.originalname)}`,
        );
      },
    }),
  }).single('file');

  fileUpload(req, res, (error) => {
    if (error) {
      throw new ErrorMessage({
        statusCode: 400,
        message: 'Erro ao efetuar upload do arquivo.',
      });
    } else if (req.file === undefined) {
      throw new ErrorMessage({
        statusCode: 400,
        message: 'Erro ao efetuar upload do arquivo.',
      });
    } else {
      return res.status(200).json(req.file);
    }
  });
};
