import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Berhasil Akses Middleware....');
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(403)
        .send({
          error: "No Authentication Token Provided"
        })
    }

    if (authorization === '123') {
      next();
    } else {
      return res
        .status(403)
        .send({
          error: "No Authentication Token Provided"
        })
    }
  }
}