/**
 * MyAPI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PointDto } from './pointDto';


export interface BasicLoanDto { 
    id?: string;
    amount?: number;
    interest?: number;
    dateTime?: string;
    numberDate?: number;
    borrowerClientId?: string;
    total?: number;
    totalDebt?: number;
    name?: string | null;
    tags?: Array<string> | null;
    paymentToday?: number;
    location?: PointDto;
}

