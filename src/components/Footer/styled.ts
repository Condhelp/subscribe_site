import styled from "styled-components"

export const Component = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.green.dark};
  border-radius: 16px;
  padding: 20px;
`

export const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green.light};

  span {
    color: ${({ theme }) => theme.colors.green.light};
    font-weight: 600;
  }
`

export const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 24px;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  span {
    text-decoration: none;
    color: #90cc61;
    font-size: 14px;
    transition: color 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    flex-direction: column;
    align-items: flex-start;

    span:nth-child(2) {
      display: none;
    }
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
