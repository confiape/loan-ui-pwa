/**
 * MyAPI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TagDto } from './tagDto';


export interface TagDtoPaginationResponse { 
    pageSize?: number;
    currentPage?: number;
    orderBy?: Array<string> | null;
    totalItems?: number;
    result?: Array<TagDto> | null;
}

