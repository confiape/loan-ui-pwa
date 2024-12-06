export * from './authenticate.service';
import { AuthenticateService } from './authenticate.service';
export * from './borrower.service';
import { BorrowerService } from './borrower.service';
export * from './country.service';
import { CountryService } from './country.service';
export * from './dashBoard.service';
import { DashBoardService } from './dashBoard.service';
export * from './file.service';
import { FileService } from './file.service';
export * from './loan.service';
import { LoanService } from './loan.service';
export * from './payment.service';
import { PaymentService } from './payment.service';
export * from './reports.service';
import { ReportsService } from './reports.service';
export * from './tag.service';
import { TagService } from './tag.service';
export const APIS = [AuthenticateService, BorrowerService, CountryService, DashBoardService, FileService, LoanService, PaymentService, ReportsService, TagService];
