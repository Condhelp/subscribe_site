import * as S from "./styled"

import Container from "../../components/Container"
import Footer from "../../components/Footer"

import Header from "../../components/Header"
import Section from "../../components/Section"

import computers from "../../assets/images/who_computers.png"
import logo from "../../assets/images/logo_colorfull.png"
import { useEffect } from "react"

const WhoPage = () => {
  useEffect(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0 })
    }
  }, [])
  return (
    <S.Page>
      <Header floatFixed={true} />

      <Container>
        <S.PageContent>
          <Section
            title="Somos a CONDHELP"
            headerAlign={"left"}
            smallTitle={true}
          >
            <S.PageMain>
              <strong>Sistema</strong> desenvolvido{" "}
              <span className="green">CRITERIOSAMENTE</span>, para o setor{" "}
              <span className="yellow">CONDOMINIAL</span>.
              <br />É <strong>tecnologia</strong> somando{" "}
              <span className="green">EXPERIÊNCIA</span>,{" "}
              <strong>transformando</strong> desafios em{" "}
              <span className="yellow">RESULTADO</span>.<strong></strong>
            </S.PageMain>
          </Section>

          <Section
            title="Determinação"
            headerAlign={"left"}
            smallTitle={true}
            smallGap={true}
          >
            <S.CompanyDescription>
              <S.CDesc>
                A <strong>CONDHELP</strong> nasceu da necessidade de{" "}
                <strong>mudança</strong>, somado a paixão por condomínios e
                viver em comunidade. Somamos mais de <strong>25 anos</strong> de
                vivência neste mercado, visualizamos um mercado ainda carente,
                no qual iremos atender com <strong>propriedade</strong> trazendo
                um novo conceito de <strong>conexão</strong>.
              </S.CDesc>
              <S.CDesc>
                Startup inovadora e visionaria, com um único propósito, o de
                transformar o mercado <strong>condominial</strong>. Vamos estar
                presente em cada canto onde houver condomínio, levando
                informação, comunicação, conexão e benefício para todos que
                tramitam nesse mercado.
              </S.CDesc>
            </S.CompanyDescription>
          </Section>

          <S.Box>
            <span>Somos a mão que traz segurança e que ajuda de verdade!</span>
          </S.Box>

          <Section
            title="Faça parte do que há de melhor, moderno e inteligente no mercado condominial."
            description="Venha para a CONDHELP, conexão rápida e inteligente."
            smallTitle={true}
            smallGap={true}
          >
            <S.ImagesContainer>
              <img src={computers} alt="" />
              <img src={logo} alt="" />
            </S.ImagesContainer>
          </Section>
        </S.PageContent>
      </Container>
      <Footer />
    </S.Page>
  )
}

export default WhoPage
