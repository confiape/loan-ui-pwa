/**
 * MyAPI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ReportPaymentByLoanDetailsDto } from './reportPaymentByLoanDetailsDto';


export interface ReportPaymentByLoanDto { 
    name?: string | null;
    dni?: string | null;
    tags?: Array<string> | null;
    dateTime?: string;
    amount?: number;
    interest?: number;
    totalAmount?: number;
    totalPayment?: number;
    isComplete?: boolean;
    detailedDtos?: Array<ReportPaymentByLoanDetailsDto> | null;
}

