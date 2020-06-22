import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        if (response && response.status) {
            response
                .status(status)
                .json({
                    statusCode: status,
                    message: exception.message,
                    timestamp: new Date().toISOString(),
                    path: request.url,
                });
        } else {
            console.log("Error:", exception.message);
            console.log("Response:", response);
            console.log("Request:", request);
        }
    }
}
