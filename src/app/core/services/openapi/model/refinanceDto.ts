/**
 * MyAPI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LoanType } from './loanType';


export interface RefinanceDto { 
    loanId?: string;
    amount?: number | null;
    interest?: number;
    numberDate?: number;
    suggestedDays?: Array<string> | null;
    loanType?: LoanType;
}
export namespace RefinanceDto {
}


