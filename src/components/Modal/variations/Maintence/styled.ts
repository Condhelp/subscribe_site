import styled from "styled-components"

export const Element = styled.div`
  border-radius: 4px;
  padding: 14px 14px;
  background-color: transparent;
  max-width: 520px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    max-width: 80svw;
    padding: 0px;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
`

export const HeaderMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutral.grey};
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: auto;
  overflow: hidden;

  max-height: 80svh;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    max-height: 80svh;
  }
`

export const Message = styled.div`
  padding: 16px 32px;
  border-radius: 12;
  margin: auto;
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.grey};
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Goodbye = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.grey};
  text-align: center;
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
  position: absolute;
  top: 0;
  right: 0;

  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.yellow.medium};
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;

  border-radius: 80px;

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    width: 24px;
    height: 24px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`
