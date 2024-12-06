/**
 * MyAPI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TagBorrowerClient } from './tagBorrowerClient';
import { Loan } from './loan';


export interface BorrowerClient { 
    id?: string;
    changeBy?: string;
    changeDate?: string;
    isDeleted?: boolean;
    avatar?: string | null;
    background?: string | null;
    name: string;
    dni?: string | null;
    dniPath?: string | null;
    email?: string | null;
    phoneNumber?: string | null;
    title: string;
    company?: string | null;
    birthday?: string | null;
    address?: string | null;
    notes?: string | null;
    status?: string | null;
    loans?: Array<Loan> | null;
    tagBorrowerClients?: Array<TagBorrowerClient> | null;
}

