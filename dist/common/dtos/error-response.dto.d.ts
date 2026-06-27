import { IErrorResponse } from '../interfaces/error-response.interface';
export declare class ErrorResponseDto implements IErrorResponse {
    statusCode: number;
    message: string;
    error: string;
    timestamp: string;
    path: string;
}
