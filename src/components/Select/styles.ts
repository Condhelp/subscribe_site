import styled from "styled-components"

export const SelectArea = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const DataArea = styled.div<{ $disabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white.main};
  background-color: ${({ $disabled, theme }) =>
    !$disabled ? theme.colors.white.main : theme.colors.white.main};
  cursor: ${({ $disabled }) => ($disabled ? undefined : "pointer")};
  border-radius: 12px;
  padding: 10px;
  transition: background-color 0.3s;

  svg {
    transition: transform 0.3s;
    fill: ${({ theme }) => theme.colors.white.main};
    transform: rotate(0deg);
  }

  &.turnedIcon svg {
    transform: rotate(180deg);
  }
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.span`
  font-size: 14px;

  color: ${({ theme }) => theme.colors.white.main};
  white-space: nowrap;
`

export const SelectedInfo = styled.span`
  font-size: 14px;
  color: #333;
`

export const OptionsArea = styled.div<{ $reverse: boolean }>`
  display: none;
  position: absolute;
  ${({ $reverse }) => ($reverse ? `bottom` : `top`)}: calc(100% + 4px);
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white.main};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  max-height: 180px;
  overflow-y: auto;
  z-index: 10;

  &.visible {
    display: block;
  }
`

export const Option = styled.div`
  background-color: ${({ theme }) => theme.colors.white.main};
  transition: background-color 0.3s;
  padding: 8px;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green.light};
  }
`
