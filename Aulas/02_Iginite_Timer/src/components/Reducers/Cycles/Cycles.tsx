export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface TStateCycle {
  cycles: Cycle[]
  activeCycleId: string | null
}

export interface TActionCycle {
  type: 'ADD-CYCLE' | 'SET-CYCLE-FINISHED' | 'SET-CYCLE-INTERRUPTED'
  payload?: any
}

export function CyclesReducer(cycleState: TStateCycle, action: TActionCycle) {
  switch (action.type) {
    case 'ADD-CYCLE':
      return {
        ...cycleState,
        cycles: [...cycleState.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id
      }
    case 'SET-CYCLE-FINISHED':
      return {
        ...cycleState,
        cycles: cycleState.cycles.map(c => {
          if (c.id === cycleState.activeCycleId) {
            return { ...c, finishedDate: new Date() }
          } else {
            return c
          }
        }),
        activeCycleId: null
      }
    case 'SET-CYCLE-INTERRUPTED':
      return {
        ...cycleState,
        cycles: cycleState.cycles.map(c => {
          if (c.id === cycleState.activeCycleId) {
            return { ...c, interruptedDate: new Date() }
          } else {
            return c
          }
        }),
        activeCycleId: null
      }

    default:
      return cycleState
  }
}
