import {Component} from '@angular/core';
import {LoanService} from '../../core/services/openapi';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  constructor(private _loanService: LoanService) {
  }


  buttonHandl() {
    this._loanService.apiLoanGet().subscribe(data => {
      console.log(data)
    })
  }
}
