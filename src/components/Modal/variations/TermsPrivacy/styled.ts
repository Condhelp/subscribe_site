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

export const TermTitle = styled.h2<{$documentTitle?: boolean}>`
  font-size: 18px;
  font-weight: 600;
  text-align: ${({ $documentTitle }) => ($documentTitle ? "center" : "left")};
  color: ${({ theme }) => theme.colors.neutral.grey};
  margin: 16px 0 ${({ $documentTitle }) => ($documentTitle ? 16 : 0)}px;
`

export const TermText = styled.p`
  font-size: 16px;
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

export const Button = styled.button<{ $disabled: boolean }>`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.yellow.medium};
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  width: fit-content;
  padding: 14px 34px;
  border-radius: 80px;
  color: ${({ theme }) => theme.colors.green.medium};
  font-weight: 600;
  margin: auto;
  filter: saturate(${({ $disabled }) => ($disabled ? 0 : 1)});
  transition: filter 0.3s;
`

export const TermsAcceptArea = styled.div<{ $active: boolean }>`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 6px 16px;
  cursor: pointer;
`

export const TAIndicator = styled.div<{ $active: boolean }>`
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.green.medium : theme.colors.neutral.grey};
  transition: border-color 0.3s;

  &::after {
    content: "";
    position: relative;
    width: 14px;
    height: 14px;
    border-radius: 14px;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    background-color: ${({ theme }) => theme.colors.green.medium};
    transition: opacity 0.3s;
  }
`

export const TALabel = styled.span`
  color: ${({ theme }) => theme.colors.neutral.grey};
`

export const Divider = styled.div`
  height: 2px;
  border-radius: 2px;
  background-color: #ccc;
`
