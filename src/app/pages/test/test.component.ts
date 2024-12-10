import {Component, OnInit} from '@angular/core';
import {LoanService} from '../../core/services/openapi';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit{
  constructor(private _loanService:LoanService) {
  }
    ngOnInit(): void {

    }


  buttonHandl() {
    this._loanService.apiLoanGet().subscribe(data => {
      console.log(data)
    })
  }
}
