import { useContext } from 'react'
import { CyclesContext } from '../../context/CycleContext'
import { HistoryContainer, HistoryTable, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)} </pre>
      <HistoryTable>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="yellow">em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="red">interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryTable>
    </HistoryContainer>
  )
}
