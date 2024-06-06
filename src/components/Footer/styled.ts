import styled from "styled-components"

export const Component = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.green.medium};
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  gap: 48px;

  img {
    max-width: 320px;
    margin: auto;
  }

  @media (max-width: 420px) {
    img {
      max-width: 100%;
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

  @media (max-width: ${({theme}) => theme.bp.small}px) {
    font-size: 16px;
  }
`

export const Divider = styled.div`
  height: 24px;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.white.main};
`
