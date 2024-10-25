import styled from "styled-components"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.green.dark};
`

export const Hero = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;

  & > img {
    min-width: 100vw;
    position: absolute;
    z-index: 1;
    height: auto;
    min-height: 100vh;
  }
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

export const PointSection = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.bp.medium}px) {
    background-size: 100%;
    padding: 64px 0;
  }
`

export const PointImage = styled.img`
  width: 860px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.bp.medium}px) {
    width: 100%;
  }
`

export const PointText = styled.p`
  width: 860px;
  color: ${({ theme }) => theme.colors.yellow.medium};
  font-size: 32px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.bp.medium}px) {
    width: 100%;
    font-size: 24px;
  }

  span {
    color: ${({ theme }) => theme.colors.yellow.light};
    font-weight: bold;
  }
`

export const Testimonials = styled.div`
  display: flex;
  gap: 32px;
  padding: 100px 0;

  @media (max-width: ${({ theme }) => theme.bp.medium}px) {
    flex-direction: column;
    gap: 124px;
  }

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    padding-bottom: 0;
  }
`

// Form

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 620px;
  margin: auto;
  padding: 32px 0 140px;
`

export const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 620px;
  color: ${({ theme }) => theme.colors.white.main};
  text-align: center;

  span:nth-child(1) {
    font-size: 32px;
    font-weight: 600;
  }

  span:nth-child(2) {
    font-size: 22px;
    font-weight: 400;
  }

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    span:nth-child(1) {
      font-size: 24px;
    }

    span:nth-child(2) {
      font-size: 16px;
    }
  }
`

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`

export const FormLine = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`

export const FormInfo = styled.p`
  color: ${({ theme }) => theme.colors.yellow.light};
  font-size: 18px;
  text-align: center;
  max-width: 460px;
`

export const FormButtons = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 48px;

    & > div,
    & > button {
      width: fit-content;
    }
  }
`

export const RecaptchaArea = styled.div`
  background-color: ${({ theme }) => theme.colors.white.main};
  border-radius: 2px;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  @media (max-width: 720px) {
    gap: 48px;
  }
`

export const RLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;

  span {
    font-family: Roboto;
    font-size: 16px;
    color: #000;
  }
`

export const RCheckbox = styled.input`
  width: 24px;
  height: 24px;
`

export const RLogo = styled.img`
  height: 60px;
  width: auto;
`

export const SubmitBtn = styled.button<{ $disabled: boolean }>`
  outline: none;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? "unset" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.yellow.medium};
  color: ${({ theme }) => theme.colors.green.dark};
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.8rem 1.4rem;
  border-radius: 12px;
  flex: 1;
  transition: opacity 0.3s;
`

export const TermsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  span {
    font-family: Roboto;
    font-size: 16px;
    color: #000;
  }
`

export const TermsCheckbox = styled.div`
  display: flex;
  cursor: pointer;
  padding: 8px;

  input {
    cursor: pointer;
  }
`

export const TermsMessage = styled.div`
  span,
  button {
    color: ${({ theme }) => theme.colors.white.main};
    font-size: 16px;
    font-family: "Roboto";
  }
`

export const PrivacyButton = styled.button`
  border: none;
  background: none;
  outline: none;
  padding: 4px;
  span {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.yellow.medium};
    text-decoration: underline;
    font-weight: 500;
  }
`
