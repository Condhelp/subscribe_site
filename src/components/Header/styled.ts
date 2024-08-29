import styled from "styled-components"

export const Element = styled.header<{ $floating: boolean; $opened: boolean }>`
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

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.green.medium};
    height: 100vh;
    position: fixed;
    left: 100%;
    width: 80vw;
    transition: transform 0.3s;
    gap: 64px;
    transform: translateX(${({ $opened }) => ($opened ? "-100%" : "0%")});
  }
`

export const BurguerButton = styled.button`
  background-color: #f7f7f7;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 42px;
  height: 38px;
  width: 38px;
  position: absolute;
  top: 20px;
  left: -42px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.24);
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-right: 0;
  }
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

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    width: 100%;
    justify-content: center;
  }
`
