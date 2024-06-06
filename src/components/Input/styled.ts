import styled from "styled-components"

export const Component = styled.footer`
  position: relative;
  flex: 1;
  display: flex;

  @media (max-width: ${({theme}) => theme.bp.small}px) {
    flex: unset;
    min-width: 100%;
  }
`

export const Input = styled.input`
  color: #333;
  flex: 1;
  border-radius: 12px;
  padding: 20px;
  outline: none;
  border: none;
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.colors.green.dark};
    text-align: center;
  }
`
