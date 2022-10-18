import styled from "styled-components";

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme["gray-100"]};
  }

`

export const HistoryTable = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table{
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    

    th{        
      background-color:  ${props => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color:  ${props => props.theme["gray-100"]};

      font-size: 0.875rem;
      line-height: 1.6;
      /* text-align: center; */

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;               
      }
  
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${props => props.theme["gray-600"]};
      border-top: 4px solid  ${props => props.theme["gray-800"]}; 
      padding: 1rem;
      line-height: 1.6;
      font-size: 0.875rem;      

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:first-child {
        padding-right: 1.5rem;
      }
    }

  }
`
const STATUS_COLOR = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500'
} as const

interface StatusProps{
  statusColor: keyof typeof STATUS_COLOR;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem; 

  &::before {
    content: '';
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;

    background-color:  ${props => props.theme[STATUS_COLOR[props.statusColor]]};
  }

`