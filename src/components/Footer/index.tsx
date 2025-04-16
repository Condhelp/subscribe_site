import * as S from "./styled"
import { ReactComponent as Logo } from "../../assets/icons/logo_dark.svg"
import Container from "../Container"
import Modal from "../Modal"
import { useState } from "react"

const Footer = () => {
  const [modal, setModal] = useState<{
    state: boolean
    role: "privacy" | "cookies"
  }>({
    state: false,
    role: "privacy",
  })

  const openTerms = (term: "privacy" | "cookies") => {
    setModal({
      state: true,
      role: term,
    })
  }

  return (
    <S.Component>
      <Modal
        role={modal.role}
        visible={modal.state}
        onClose={() => setModal((prev) => ({ ...prev, state: false }))}
      />
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

          <S.TermsArea>
            <S.TermButton onClick={() => openTerms("privacy")}>
              <span>Política de privacidade</span>
            </S.TermButton>
            <S.TermButton onClick={() => openTerms("cookies")}>
              <span>Política de cookies</span>
            </S.TermButton>
          </S.TermsArea>

          <S.Nav>
            <span>
              {new Date().getFullYear()} © Todos os direitos reservados
            </span>
          </S.Nav>
        </S.Main>
      </Container>
    </S.Component>
  )
}

export default Footer
