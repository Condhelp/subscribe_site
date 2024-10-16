import styled from "styled-components"

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
`

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white.main};
`

export const Box = styled.div<{ $state: boolean }>`
  background-color: ${({ $state, theme }) =>
    $state ? theme.colors.white.main : theme.colors.white.main};
  width: 48px;
  height: 24px;
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 18px;
  transition: background-color 0.3s;
  position: relative;
`
