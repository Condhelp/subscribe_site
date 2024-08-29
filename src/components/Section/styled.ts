import styled from "styled-components"

export const Component = styled.div<{ $fullHeight?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  margin: auto;
`

export const Title = styled.span`
  font-size: 48px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.green.light};
`

export const Description = styled.span<{ $big?: boolean }>`
  font-size: 22px;
  color: #61676a;
  max-width: ${({ $big }) => ($big ? "unset" : "590px")};
  margin: auto;
`

export const Content = styled.div`
  display: flex;
`
