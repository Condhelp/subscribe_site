import styled from "styled-components"

export const Component = styled.div<{
  $reverse?: boolean
  $fullHeight?: boolean
}>`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  gap: 36px;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green.light};

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    flex-direction: column;
  }
`

export const Image = styled.div<{ $img: string }>`
  width: 100%;
  max-width: 528px;
  height: auto;
  aspect-ratio: 1.2;
  background-image: url(${({ $img }) => $img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px;
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 440px;
`

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Title = styled.span`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.yellow.light};

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    font-size: 20px;
  }
`

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Description = styled.span<{ $big?: boolean }>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white.main};
  max-width: ${({ $big }) => ($big ? "unset" : "590px")};
  margin: auto;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    max-width: 100%;
    font-size: 16px;
  }
`

export const Content = styled.div`
  display: flex;
`

export const Button = styled.button<{ $disabled?: boolean }>`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.yellow.medium};
  cursor: ${({ $disabled }) => ($disabled ? "unset" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  width: fit-content;
  padding: 14px 34px;
  border-radius: 80px;
  color: ${({ theme }) => theme.colors.green.medium};
  font-weight: 600;
  margin: auto;
`
