import * as S from "./styled"
import { ReactComponent as Logo } from "../../assets/icons/logo_dark.svg"
import Container from "../Container"
import { footer } from "../../utils/system/menu"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <S.Component>
      <Container>
        <S.Disclaimer>
          <span>Atenção</span>
          <span>
            A CONDHELP é apenas uma plataforma de conexão, e não oferece
            quaisquer garantias, implícitas ou explicitas, sobre os produtos e
            serviços disponibilizados em nossa Solução. Assim, a CONDHELP não se
            responsabiliza, a qualquer título, pelos serviços ou produtos
            comercializados pelos fornecedores listados em nosso Sistema, sendo
            sua contratação por conta e risco do Síndico, que fica ciente que
            todos os eventuais danos ou prejuízos, de qualquer natureza, que
            possam decorrer da contratação/aquisição dos serviços e produtos
            listados em nosso Sistema são de responsabilidade exclusiva do
            fornecedor contratado, sem qualquer solidariedade ou subsidiariedade
            da CONDHELP.
          </span>
        </S.Disclaimer>
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
