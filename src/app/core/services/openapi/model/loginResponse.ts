/**
 * MyAPI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PersonDto } from './personDto';


export interface LoginResponse { 
    user?: PersonDto;
    accessToken?: string | null;
    tokenType?: string | null;
}

