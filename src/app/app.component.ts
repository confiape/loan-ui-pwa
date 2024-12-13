import {Component, OnInit} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {BehaviorSubject, switchMap} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    MatToolbarModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  t1: string = ""
  t2: string = ""
  o1 = new BehaviorSubject<string>("");
  o2 = new BehaviorSubject<string>("");

  ngOnInit(): void {
    this.o1.pipe(
      switchMap(f => this.o2.pipe(
        map(g => f + " " + g)
      ))
    )

      .subscribe({
        next: value => console.log(value)
      });
  }

  p1(i: string) {
    this.o1.next(i)
  }

  p2(t1: string) {
    this.o2.next(t1)
  }
}
