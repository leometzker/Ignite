import styled from 'styled-components'

export const PostStyled = styled.div`
  .postContainer {
    header {
      nav {
        display: flex;
        justify-content: space-between;
        font-size: 0.875rem;
      }

      height: 10.5rem;
      border-radius: 10px;
      padding: 2rem;
      background-color: ${props => props.theme.colors.profile};
    }
    main {
      padding: 2rem 2.5rem;
      text-align: justify;

      .exemple {
        margin-top: 1.5rem;
        border-radius: 10px;
        height: 150px;
        padding: 1rem;

        background-color: ${props => props.theme.colors.input};
      }
    }
  }
`
