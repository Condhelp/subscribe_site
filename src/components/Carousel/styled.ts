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
  border-radius: 16px;
  flex: 1;

  img {
    height: 100%;
    max-height: 100%;
    width: auto;
  }
`

export const SlideContent = styled.div<{ $transparent: boolean }>`
  z-index: 2;
  width: 480px;
  min-height: 60svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: "unset";
  background-color: ${({ $transparent }) =>
    $transparent ? "transparent" : "rgba(255, 255, 255, 0.2)"};
  backdrop-filter: blur(${({ $transparent }) => ($transparent ? 0 : 10)}px);
  padding: 20px;
  border-radius: 16px;
  margin: ${({ $transparent }) => ($transparent ? 0 : 20)}px 0;
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
