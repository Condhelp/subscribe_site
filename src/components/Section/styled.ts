import styled from "styled-components"

export const Component = styled.div<{
  $fullHeight?: boolean
  $smallGap?: boolean
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ $smallGap }) => ($smallGap ? 32 : 64)}px;
`

export const Head = styled.div<{ $align?: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: ${({ $align }) => $align ?? "center"};
  margin: ${({ $align }) => ($align ? "unset" : "auto")};
`

export const Title = styled.span<{ $small?: boolean }>`
  font-size: ${({ $small }) => ($small ? 32 : 48)}px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.green.light};

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    font-size: 32px;
  }
`

export const Description = styled.span<{ $big?: boolean }>`
  font-size: 22px;
  color: #61676a;
  max-width: ${({ $big }) => ($big ? "unset" : "590px")};
  margin: auto;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    max-width: 100%;
    font-size: 16px;
  }
`

export const Content = styled.div`
  display: flex;
`
