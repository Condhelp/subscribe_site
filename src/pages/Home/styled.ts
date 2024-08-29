import styled from "styled-components"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f4f5f7;
`

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin: 60px 0;
`

export const Hero = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  border-radius: 36px;
  background-image: linear-gradient(
    115deg,
    #1c321e 0%,
    #4e7c3c 80%,
    #f3d332 140%
  );
`

export const HeroContents = styled.div`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  height: 100%;
  flex: 1;
  gap: 60px;
`

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.yellow.medium};
  text-align: center;
`

export const MainLogo = styled.img`
  width: 600px;

  @media (max-width: ${({ theme }) => theme.bp.medium}px) {
    min-width: 240px;
    width: 100%;
    max-width: 600px;
  }
`

export const GetIn = styled.a`
  cursor: pointer;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.yellow.medium};
  color: ${({ theme }) => theme.colors.green.dark};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 2;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.8rem 1.4rem;
  border-radius: 12px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    font-size: 16px;
  }
`

// Sections

export const Line = styled.div`
  display: flex;
  gap: 48px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  img {
    border-radius: 12px;
  }
`

export const LineColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 360px;
`

export const LineTitle = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: #333;
`

export const LineDescription = styled.span`
  font-size: 18px;
  color: #61676a;
`

// Vídeo area
export const VideoArea = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border: 1px solid #61676a;
  border-radius: 8px;
  display: grid;
  place-items: center;
`

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.green.medium};
  cursor: pointer;
  width: fit-content;
  padding: 14px 34px;
  border-radius: 80px;
  color: ${({ theme }) => theme.colors.white.main};
`

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`

export const FeatureLine = styled.div<{ $reverse: boolean; $dark: boolean }>`
  /* max-width: 980px; */
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  background-color: ${({ $dark, theme }) =>
    $dark ? "transparent" : theme.colors.white.main};
  gap: 36px;
  border-radius: 24px;
  padding: 20px;

  img {
    width: 100%;
    max-width: 580px;
    border-radius: 8px;
  }
`

export const FeatureInfo = styled.div<{ $justText?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justText }) => ($justText ? "center" : "flex-start")};
  gap: 16px;
`

export const FeatureTitle = styled.span<{ $textCenter?: boolean }>`
  font-size: 22px;
  font-size: ${({ $textCenter }) => ($textCenter ? 32 : 22)}px;
  font-weight: 500;
  color: #333;
  text-align: ${({ $textCenter }) => ($textCenter ? "center" : "left")};
`

export const FeatureText = styled.span`
  font-size: 18px;
  color: #61676a;
`

export const StartGap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  span {
    max-width: 580px;
    font-size: 18px;
  }
`

export const StartGapContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 16px;

    span {
      white-space: nowrap;
    }
  }
`

export const SPGArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const SPGExpandButton = styled.button<{ $opened: boolean }>`
  outline: none;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  span {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: #61676a;
  }

  svg {
    transition: transform 0.3s;
    transform: rotate(${({ $opened }) => ($opened ? 0 : 180)}deg);
  }
`

export const SPGWrapper = styled.div<{ $opened: boolean }>`
  display: grid;
  transition: grid-template-rows 0.3s;
  grid-template-rows: ${({ $opened }) => ($opened ? 1 : 0)}fr;
`

export const SPGContent = styled.div<{ $opened: boolean }>`
  min-height: 0;
  overflow: hidden;
`

export const ServicesProductsGrid = styled.div`
  display: grid;
  gap: 36px;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  background-color: ${({ theme }) => theme.colors.white.main};
  padding: 20px;
  border-radius: 8px;
`

export const SPCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SPCategoryName = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #434546;
  text-transform: uppercase;
`

export const SPList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SPItem = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.green.dark};
`
