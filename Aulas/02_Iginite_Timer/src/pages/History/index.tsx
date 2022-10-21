import { useContext } from 'react'
import { CyclesContext } from '../../context/CycleContext'
import { HistoryContainer, HistoryTable, Status } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryTable>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>
          <tbody>
            {cycles.map(c => {
              return (
                <tr key={c.id}>
                  <td>{c.task} </td>
                  <td>{c.minutesAmount} min</td>
                  <td>
                    {formatDistanceToNow(c.startDate, {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </td>
                  <td>
                    {c.finishedDate && (
                      <Status statusColor="green">Concluido</Status>
                    )}
                    {c.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!c.finishedDate && !c.interruptedDate && (
                      <Status statusColor="yellow">em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryTable>
    </HistoryContainer>
  )
}
