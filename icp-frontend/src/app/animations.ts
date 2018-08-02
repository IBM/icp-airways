import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
  query,
  stagger,
  state
} from '@angular/animations';

export const flightTrigger = trigger('flightsList', [
  transition('* => *', [
    query('.flight-info', style({ opacity: 0 }), { optional: true }),

    query(
      '.flight-info',
      stagger('100ms', [
        animate(
          '1s ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-70px)', offset: 0 }),
            style({
              opacity: 0.5,
              transform: 'translateY(35px)',
              offset: 0.3
            }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ]),
      { optional: true }
    )
  ])
]);

export const translateTrigger = trigger('movePlane', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translate(-5rem,5rem)', offset: 0 }),
    animate(
      '1s ease-in',
      keyframes([
        style({ opacity: 0, transform: 'translate(-5rem,5rem)', offset: 0 }),
        style({
          opacity: 0.5,
          transform: 'translate(-2.5rem,2.5rem)',
          offset: 0.3
        }),
        style({ opacity: 1, transform: 'translate(0,0)', offset: 1 })
      ])
    )
  ])
]);

export const slideTrigger = trigger('slide', [
  state('left', style({ transform: 'translateX(0)' })),
  state('right', style({ transform: 'translateX(-50%)' })),
  transition('* => *', animate('750ms cubic-bezier(0.075, 0.82, 0.165, 1)'))
]);
