import { Injectable } from '@nestjs/common';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

@Injectable()
export class LoansService {
    calculateLoanRisk(userProfile: any): string {
        // Lógica básica para determinar el riesgo
        if (userProfile.creditScore > 700) {
        return 'Low Risk';
        } else {
        return 'High Risk';
        }
    }
}
@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();

        response.status(status).json({
        statusCode: status,
        message: exception.message,
        });
    }
}