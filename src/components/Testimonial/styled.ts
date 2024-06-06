import styled from "styled-components"

export const Component = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Main = styled.div`
  background-color: ${({ theme }) => theme.colors.green.light};
  display: flex;
  gap: 20px;
  padding: 12px 20px 32px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    padding-bottom: 24px;
  }
`

export const Image = styled.img`
  width: 160px;
  aspect-ratio: 1;
  border-radius: 80px;
  position: absolute;
  transform: translateY(-50%);

  @media (max-width: ${({ theme }) => theme.bp.medium}px) {
    width: 120px;
  }
`

export const Speaker = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 180px;

  span {
    color: ${({ theme }) => theme.colors.white.main};
    white-space: nowrap;

    &:nth-child(1) {
      font-size: 18px;
      font-weight: 500;
    }

    &:nth-child(2) {
      font-size: 24px;
      font-weight: 600;
    }
  }

  @media (max-width: ${({ theme }) => theme.bp.medium}px) {
    margin-left: 140px;
    
    span {

      &:nth-child(1) {
        font-size: 14px;
      }

      &:nth-child(2) {
        font-size: 18px;
      }
    }
  }
`

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.green.medium};
  font-size: 24px;
  padding: 0.5em;
  text-align: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  span {
    color: ${({ theme }) => theme.colors.yellow.light};
    font-weight: 600;
  }

  @media (max-width: ${({theme}) => theme.bp.medium}px) {
    font-size: 18px; 
  }
`
