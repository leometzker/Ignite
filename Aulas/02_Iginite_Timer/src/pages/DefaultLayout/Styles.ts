import styled from "styled-components"

export const LayoutContainer  = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${prpos => prpos.theme["gray-800"]};

  overflow: auto;
  min-height: 35rem;
`