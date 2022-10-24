import { Cycle, TActionCycle } from './Cycles'

export function addNewCycleAction(newCycle: Cycle): TActionCycle {
  return {
    type: 'ADD-CYCLE',
    payload: { newCycle }
  }
}

export function setInterruptCycleAction(): TActionCycle {
  return {
    type: 'SET-CYCLE-INTERRUPTED'
  }
}

export function setFinishedCycleAction(): TActionCycle {
  return {
    type: 'SET-CYCLE-FINISHED'
  }
}
