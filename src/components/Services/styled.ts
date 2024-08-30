import styled from "styled-components"

export const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 36px;
  flex: 1;
`

export const Title = styled.span`
  font-size: 22px;
  color: #61676a;
`

export const SGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 36px;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const SGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 22px 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white.main};
  cursor: pointer;

  span {
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green.dark};
    text-transform: uppercase;
  }
`
