import styled from 'styled-components'

export const PostStyled = styled.div`
  .postContainer {
    header {
      height: 10.5rem;
      border-radius: 10px;
      padding: 2rem;
      background-color: ${props => props.theme.colors.profile};

      nav {
        display: flex;
        justify-content: space-between;
        font-size: 0.875rem;
      }

      a {
        font-size: 0.875rem;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-weight: 700;
        line-height: 0;
        color: ${props => props.theme.colors.blue};
      }

      .postTitle {
        margin-top: 1.25rem;
        color: ${props => props.theme.colors.title};
      }
      .info {
        display: flex;
        gap: 2rem;
        margin-top: 0.5rem;

        color: ${props => props.theme.colors.span};
        span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }
    main {
      padding: 2rem 2.5rem;

      display: flex;
      .markContent {
        /* overflow: hidden; */
        * {
          max-width: 100%;
        }
      }
    }
  }
`
