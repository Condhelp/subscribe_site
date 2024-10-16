import styled from "styled-components"

export const Element = styled.div`
  border-radius: 4px;
  padding: 14px 14px;
  background-color: ${({ theme }) => theme.colors.white.main};
  box-shadow: 0 6px 50px rgba(0, 0, 0, 0.18);
  min-width: 540px;
  overflow: visible;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    min-width: unset;
    width: 100%;
  }
`

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 6px 20px;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.08);
  border-radius: 4px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 36px;
  }

  svg {
    width: 36px;
    height: 36px;
    filter: saturate(0);
  }
`

export const UserNameArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.green.medium};
`

export const UserPoints = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white.main};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 20px;
  width: 100%;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral.grey};
`

export const Message = styled.div`
  padding: 32px;
  border-radius: 12;
  /* background-color: ${({ theme }) => theme.colors.white.main}; */
  margin: auto;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral.grey};
`

export const Goodbye = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.grey};
`

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  width: 100%;
  margin-top: 16px;
`

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.yellow.medium};
  cursor: pointer;
  width: fit-content;
  padding: 14px 34px;
  border-radius: 80px;
  color: ${({ theme }) => theme.colors.green.medium};
  font-weight: 600;
  margin: auto;
`
