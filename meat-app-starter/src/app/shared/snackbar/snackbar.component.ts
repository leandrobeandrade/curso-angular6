import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SnackBarService } from './snackbar.service';
import { Observable, timer } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: 0
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  message: string;
  snackVisibility: string = 'hidden';

  constructor(private snackbarService: SnackBarService) { }

  ngOnInit() {
    // Anterior
    /* this.snackbarService.notifier.subscribe(message => {
      this.message = message;
      this.snackVisibility = 'visible';

      let time = timer(1500);
      time.subscribe(tempo => this.snackVisibility = 'hidden')
    }) */

    this.snackbarService.notifier.pipe(tap(message => {
      this.message = message;
      this.snackVisibility = 'visible';
    }),
      switchMap(() => timer(1500))
    ).subscribe(() => this.snackVisibility = 'hidden')
  }

  toggle() {
    this.snackVisibility = this.snackVisibility == 'hidden' ? 'visible' : 'hidden'
  }

}
