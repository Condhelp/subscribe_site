import styled from "styled-components"

export const Component = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.green.dark};
  border-radius: 16px;
`

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex: 1;
  padding: 20px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;

  span {
    text-decoration: none;
    color: #90cc61;
    font-size: 14px;
    transition: color 0.3s;
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

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const Social = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white.main};
  font-size: 22px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    font-size: 16px;
  }
`

export const Divider = styled.div`
  height: 24px;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.white.main};
`
