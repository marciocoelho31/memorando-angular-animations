import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({
    border: '2px solid #b2b6ff'
  })),
  state('highlighted', style({
    border: '4px solid #b2b6ff',
    filter: 'brightness(92%)'
  })),
  transition('default => highlighted', [
    animate('200ms ease-out', style({
      transform: 'scale(1.02)'
    })),
    animate(200)
  ])
])

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(300, style({
      opacity: 0
    }))
  ])
])

export const finalizeStateTrigger = trigger('finalizeState', [
  transition('* => finalized', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)',
      opacity: 0
    }))
  ])
])

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: 0 }),
    animate('400ms ease-out', keyframes([
      style({ opacity: 0, width: 0, offset: 0 }),
      style({ opacity: 0.5, width: '*', offset: 0.8 }),
      style({ opacity: 1, width: '*', offset: 1 })
    ]))
  ]),
  transition(':leave', [
    animate('400ms cubic-bezier(.13,.9,.8,.1)', style({
      opacity: 0, width: 0
    }))
  ])
])

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar', [
      group([
        animate(200, style({
          backgroundColor: '#63b77c',
        })),
        animate(100, style({
          transform: 'scale(1.1)'
        })),
      ]),
      animate(200, style({
        transform: 'scale(1)'
      }))
    ]),
  ]),
  transition('valid => invalid', [
    query('#botao-salvar', [
      group([
        animate(200, style({
          backgroundColor: '#6c757d',
        })),
        animate(100, style({
          transform: 'scale(1.1)'
        })),
      ]),
      animate(200, style({
        transform: 'scale(1)'
      }))
    ]),
  ])
])

export const flyInOutTrigger = trigger('flyInOut', [
  transition(':enter', [
    style({
      width: '100%',
      transform: 'translateX(-100%)',
      opacity: 0
    }),
    group([
      animate('0.3s 0.1s ease', style({
        transform: 'translateX(0)',
        width: '*'
      })),
      animate('0.3s ease', style({
        opacity: 1
      }))
    ])
  ]),
  transition(':leave', [
    group([
      animate('0.3s ease', style({
        transform: 'translateX(100%)',
        width: '*'
      })),
      animate('0.3s 0.2s ease', style({
        opacity: 0
      }))
    ])
  ])
])