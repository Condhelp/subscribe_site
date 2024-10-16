import styled from "styled-components"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f4f5f7;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    padding: 0px;
  }
`

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  margin: 240px 0 60px 0;
`

export const PageMain = styled.h1`
  font-size: 26px;
  font-weight: 400;
  line-height: 55px;
  text-align: center;
  width: 100%;
  color: #61676a;

  span {
    font-weight: 600;

    &.green {
      color: ${({ theme }) => theme.colors.green.light};
    }

    &.yellow {
      color: ${({ theme }) => theme.colors.yellow.medium};
    }
  }
`

export const CompanyDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const CDesc = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.neutral.grey};
`

export const Box = styled.div<{ $dark?: boolean }>`
  max-width: 980px;
  display: flex;
  background-color: ${({ $dark, theme }) =>
    $dark ? "transparent" : theme.colors.white.main};
  gap: 36px;
  border-radius: 24px;
  padding: 48px;
  margin: 0 auto;

  span {
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.green.light};
  }
`

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  img {
    width: 100%;
    max-width: 520px;
  }

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    img {
      max-width: 70%;
    }
  }
`
