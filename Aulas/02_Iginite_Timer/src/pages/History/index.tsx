import { HistoryContainer, HistoryTable, Status } from "./styles";

export function History() {
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
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td><Status statusColor="yellow">em andamento</Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td><Status statusColor="red">interrompido</Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td><Status statusColor="green">concluido</Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td><Status statusColor="green">concluido</Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td><Status statusColor="green">concluido</Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td><Status statusColor="green">concluido</Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>há 2 meses</td>
              <td><Status statusColor="green">concluido</Status></td>
            </tr>       
          </tbody>
        </table>
      </HistoryTable>
    </HistoryContainer>
  )
}
