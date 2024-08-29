import * as S from "./styled"
import { ReactComponent as Logo } from "../../assets/icons/logo_dark.svg"
import Container from "../Container"
import { footer } from "../../utils/system/menu"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <S.Component>
      <Container>
        <S.Main>
          <Logo />

          <S.Nav>
            <span>2024 © Todos os direitos reservados</span>
            <span>|</span>

            {footer.map((mi, k) => (
              <S.MenuItem key={k}>
                <Link to={mi.link}>{mi.text}</Link>
              </S.MenuItem>
            ))}
          </S.Nav>
        </S.Main>
      </Container>
    </S.Component>
  )
}

export default Footer
