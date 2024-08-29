import styled from "styled-components"

export const Element = styled.header<{ $floating: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
  position: fixed;
  z-index: 20;
  width: calc(100vw - 56px);
  backdrop-filter: blur(${({ $floating }) => ($floating ? 10 : 0)}px);
  background-color: ${({ $floating, theme }) =>
    $floating ? theme.colors.green.medium : "transparent"};
  transition: background-color 0.3s, backdrop-filter 0.3s;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
`

export const MenuItem = styled.div`
  a {
    text-decoration: none;
    color: #90cc61;
    font-size: 14px;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.white.main};
    }
  }
`

export const SignButton = styled.button`
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.yellow.light};
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: none;
  border-radius: 60px;
  color: ${({ theme }) => theme.colors.yellow.light};
  cursor: pointer;
`
