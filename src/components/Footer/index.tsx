import * as S from "./styled"
import { ReactComponent as Logo } from "../../assets/icons/logo_dark.svg"
import Container from "../Container"

const Footer = () => {
  return (
    <S.Component>
      <Container>
        <S.Disclaimer>
          <span>Atenção!</span>
          <span>
            A CONDHELP se orgulha de ser uma plataforma inovadora que conecta
            você às melhores soluções do mercado. Embora não ofereçamos
            garantias diretas sobre os produtos e serviços fornecidos, estamos
            comprometidos em facilitar seu acesso a uma ampla rede de
            fornecedores confiáveis. Vale lembrar que a responsabilidade pela
            contratação dos serviços ou aquisição de produtos fica a cargo do
            Síndico, permitindo que você tenha autonomia e liberdade para
            escolher o que melhor atende às suas necessidades. Qualquer questão
            relacionada à qualidade ou eventuais contratempos será diretamente
            gerida com o fornecedor escolhido, garantindo que a relação entre
            ambas as partes seja clara e transparente.
          </span>
        </S.Disclaimer>
        <S.Main>
          <Logo />

          <S.Nav>
            <span>2024 © Todos os direitos reservados</span>
          </S.Nav>
        </S.Main>
      </Container>
    </S.Component>
  )
}

export default Footer
