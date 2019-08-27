import { trigger, style, state, transition, animate } from '@angular/animations';

export const fade = trigger('fade', [
    state('void', style({
      opacity: 0
    })),
    transition(':enter', [
      animate(500)
    ])
  ]);
