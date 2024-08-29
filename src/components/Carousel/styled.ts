import styled from "styled-components"

export const Area = styled.div`
  width: 100%;
`

export const SlideArea = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;

  & > img {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: auto;
    align-self: center;
  }

  &:has(> img) {
    justify-content: center;
  }
`

export const SlidePlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex: 1;

  img {
    height: 100%;
    width: auto;
  }
`

export const SlideContent = styled.div`
  z-index: 2;
  width: 480px;
  min-height: 60svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(
    170deg,
    #1c321e 0%,
    #4e7c3c 80%,
    #f3d332 140%
  );
  padding: 20px;
`

export const SlideFor = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.yellow.medium};
  text-align: center;
`

export const SlideMessage = styled.span`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white.main};
  text-align: center;
  line-height: 52px;

  strong {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.yellow.medium};
  }
`

export const SlideAction = styled.button`
  border: 1px solid #fff;
  outline: none;
  background: none;
  border-radius: 36px;
  padding: 10px 24px;
  color: ${({ theme }) => theme.colors.white.main};
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
`
