import styled from "styled-components"

export const Page = styled.div`
  height: 100%;
  max-height: 100svh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.green.light};
  gap: 24px;
  overflow: hidden;
`

export const PageContent = styled.div`
  padding: 24px;
  /* flex: 1; */
  height: 100%;
  max-height: calc(100vh - 84px);
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.colors.green.light};
  
  img {
    max-width: 100%;
    max-height: 80%;
  }
  
  @media (max-width: 520px) {
    min-height: calc(100svh - 84px);
  }
`

export const PageFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow.light};
  color: #232323;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84px;
  padding: 0 24px;

  span {
    text-align: center;
  }
`
