import styled from "styled-components"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f4f5f7;
  min-height: 100svh;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    padding: 0px;
  }
`

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 120px;
  margin: 120px 0 0;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    margin: 120px 0 0;
  }
`

export const PageMain = styled.h1`
  font-size: 26px;
  font-weight: 400;
  line-height: 55px;
  text-align: left;
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

export const FormArea = styled.div`
  width: 100%;
  max-width: 480px;
`

export const FormTitle = styled.span`
  color: ${({ theme }) => theme.colors.yellow.medium};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`
