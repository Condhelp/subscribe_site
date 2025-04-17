import { useEffect } from "react"
import * as S from "./styled"
import { useLocation, useNavigate } from "react-router-dom"

import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Section from "../../components/Section"

// features images
import schedule from "../../assets/images/schedule.png"
import chat from "../../assets/images/chat.png"
import graphic from "../../assets/images/graphic.png"
import Header from "../../components/Header"

const f1: any[] = [
  {
    image: schedule,
    text: (() => (
      <span>
        Sabemos que não é fácil conseguir os orçamentos necessários, para
        apresentar na <strong> Assembleia.</strong>
      </span>
    ))(),
    reverse: false,
    dark: false,
  },
  {
    image: chat,
    text: (() => (
      <span>
        Nesse momento nossa solução entra em ação, toda{" "}
        <strong>inteligência</strong> e tecnologia do Sistema, estará voltada
        para que seus orçamentos sejam realizados de forma segura e eficaz.
      </span>
    ))(),
    reverse: true,
    dark: true,
  },
  {
    image: graphic,
    text: (() => (
      <span>
        Venha sentir a experiência de fazer parte do próximo nível em sua gestão
        condominial, com processos modernos, eficazes, utilizando tecnologia e
        transformando em <strong>resultado.</strong>
      </span>
    ))(),
    reverse: false,
    dark: false,
  },
]

const DetailsManager = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      if (location.state && location.state.scrollId) {
        const id = location.state.scrollId

        const el = document.getElementById(id)

        if (el) {
          const pos = el.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({ top: pos - 200, behavior: "smooth" })
        }

        window.history.replaceState({}, "")
      }
    }, 200)
  }, [location])

  const handleManagerSubscribe = () => {
    navigate("/cadastrosindico")
  }

  return (
    <S.Page>
      <Header floatFixed={true} />

      <Container>
        <S.PageContent>
          <Section
            id="wantRegister"
            title="Quero me cadastrar"
            description="Crie uma conta, cadastre seus condomínios e tenha acesso gratuito aos seus orçamentos!"
          >
            <div style={{ margin: "auto" }}>
              <S.Button onClick={handleManagerSubscribe}>
                Cadastrar agora
              </S.Button>
            </div>
          </Section>

          <Section
            id={"managerRef"}
            description="Funcionalidades que otimizam tempo e processos com as soluções CONDHELP"
          >
            <S.Features>
              {f1.map((i, k) => (
                <S.FeatureLine key={k} $reverse={i.reverse} $dark={i.dark}>
                  <img src={i.image} alt="" />
                  <S.FeatureInfo $justText={!i.title}>
                    {i.title && <S.FeatureTitle>{i.text}</S.FeatureTitle>}
                    <S.FeatureText>{i.text}</S.FeatureText>
                  </S.FeatureInfo>
                </S.FeatureLine>
              ))}
            </S.Features>
          </Section>

          <Section
            title="Quero me cadastrar"
            description="Crie uma conta, cadastre seus condomínios e tenha acesso gratuito aos seus orçamentos!"
          >
            <div style={{ margin: "auto" }}>
              <S.Button onClick={handleManagerSubscribe}>
                Cadastrar agora
              </S.Button>
            </div>
          </Section>
        </S.PageContent>
      </Container>
      <Footer />
    </S.Page>
  )
}

export default DetailsManager
