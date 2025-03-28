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

export const Label = styled.span<{ $error?: boolean }>`
  font-size: 14px;
  font-weight: 300;

  color: ${({ $error, theme }) =>
    $error ? theme.colors.yellow.light : theme.colors.white.main};
  white-space: nowrap;
`

export const InputWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white.main};
  border-radius: 12px;
  display: flex;
`

export const Input = styled.input<{
  $padding?: number
  $align?: string
  $error?: boolean
}>`
  position: relative;
  color: #333;
  flex: 1;
  border-radius: 12px;
  padding: ${({ $padding }) => $padding ?? 20}px;
  outline: none;
  border: none;
  text-align: ${({ $align }) => $align ?? "center"};
  background-color: ${({ $error, theme }) =>
    $error ? `rgba(255, 235, 0, 0.5)` : theme.colors.white.main};

  &::placeholder {
    color: ${({ theme }) => theme.colors.green.dark};
    text-align: ${({ $align }) => $align ?? "center"};
  }
`

export const ErrorMessage = styled.span<{ $visible?: boolean }>`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.yellow.light};
  width: fit-content;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s;
`
