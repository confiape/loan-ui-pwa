/**
 * MyAPI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LoanDtoAndPayments } from './loanDtoAndPayments';
import { Tag } from './tag';


export interface BorrowerClientDtoWithActiveLoans { 
    id?: string;
    avatar?: string | null;
    background?: string | null;
    name?: string | null;
    dni?: string | null;
    dniPath?: string | null;
    email?: string | null;
    phoneNumber?: string | null;
    title?: string | null;
    company?: string | null;
    birthday?: string | null;
    address?: string | null;
    notes?: string | null;
    status?: string | null;
    loans?: Array<LoanDtoAndPayments> | null;
    tags?: Array<Tag> | null;
}

