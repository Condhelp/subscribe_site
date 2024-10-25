import styled from "styled-components"

export const Element = styled.div`
  border-radius: 4px;
  padding: 24px 24px;
  background-color: ${({ theme }) => theme.colors.white.main};
  box-shadow: 0 6px 50px rgba(0, 0, 0, 0.18);
  width: 100%;
  max-width: 540px;
  overflow: visible;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    min-width: unset;
    width: 100%;
  }
`

export const ModalTitle = styled.span`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral.grey};
  width: 100%;
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 20px;
  width: 100%;
  max-height: 60svh;
  overflow: auto;
`

export const TermTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral.grey};
  font-family: "Roboto";
  margin-top: 16px;
`

export const TermText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.grey};
  font-family: "Roboto";
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
