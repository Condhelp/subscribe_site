import styled from "styled-components"

export const Component = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    flex: unset;
    min-width: 100%;
  }
`

export const Label = styled.span`
  font-size: 14px;
  font-weight: 300;

  color: ${({ theme }) => theme.colors.yellow.medium};
  white-space: nowrap;
`

export const Input = styled.input<{ $padding?: number; $align?: string }>`
  color: #333;
  flex: 1;
  width: 100%;
  border-radius: 12px;
  padding: ${({ $padding }) => $padding ?? 20}px;
  outline: none;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.green.dark};
  }
`
