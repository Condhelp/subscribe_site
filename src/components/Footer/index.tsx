import * as S from "./styled"
import mainLogo from "../../assets/images/full_logo.png"
import Container from "../Container"

const Footer = () => {
  return (
    <S.Component>
      <Container>
        <S.Main>
          <img src={mainLogo} alt={""} />
          <S.Socials>
            <S.Social
              href={"https://www.linkedin.com/in/cond-help-34921630a/"}
              target={"_blank"}
            >
              LinkedIn
            </S.Social>
            <S.Divider />
            <S.Social
              href={"https://www.instagram.com/condhelp/"}
              target={"_blank"}
            >
              Instagram
            </S.Social>
          </S.Socials>
        </S.Main>
      </Container>
    </S.Component>
  )
}

export default Footer
