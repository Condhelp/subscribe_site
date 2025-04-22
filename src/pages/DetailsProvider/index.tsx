import { useEffect, useState } from "react"
import * as S from "./styled"
import { useLocation } from "react-router-dom"
import { availableServices } from "../../utils/system/services"

import Container from "../../components/Container"
import Footer from "../../components/Footer"

import Header from "../../components/Header"
import Section from "../../components/Section"

// features images
import broker from "../../assets/images/broker.png"
import direct from "../../assets/images/direct.png"
import checks from "../../assets/images/checks.png"
import { Icons } from "../../assets/icons/icons"

const f2: any[] = [
  {
    image: broker,
    title:
      "Sua demanda aumentará sem burocracia, resultando em novos negócios!",
    text: (() => (
      <span>
        Um novo conceito no mercado condominial, aproveite essa oportunidade e
        saia na frente da concorrência.
      </span>
    ))(),
    reverse: true,
    dark: true,
  },
  {
    title: "Prestador, nunca foi tão fácil participar de orçamentos!",
    reverse: false,
    dark: true,
  },
  {
    image: direct,
    text: (() => (
      <span>
        Encurtamos o caminho, com as notificações de novos orçamentos, realize o
        contato com o <strong>Cliente</strong> e oferte sua proposta.
      </span>
    ))(),
    reverse: false,
    dark: true,
  },
  {
    image: checks,
    text: (() => (
      <span>
        Esteja sempre com seus dados atualizados, eles ficam disponíveis 24h por
        dia. Não sabemos em que momento o <strong>Cliente</strong> pode precisar
        do seu produto ou serviço.
      </span>
    ))(),
    reverse: true,
    dark: true,
  },
]

const DetailsProvider = () => {
  const location = useLocation()

  const [allServicesOpened, setAllServicesOpened] = useState(true)

  const handleGetIn = () => {
    const aLink = document.createElement("a")
    aLink.href =
      "https://wa.me/5548999918804?text=Olá gostaria de ser um prestador de serviço."
    aLink.target = "_blank"
    aLink.click()

    aLink.remove()
  }

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

  return (
    <S.Page>
      <Header floatFixed={true} />

      <Container>
        <S.PageContent>
          <Section
            id={"providerRef"}
            title="Quero oferecer meu serviço ou produto"
          >
            <S.StartGap>
              <span>
                Saia na <strong>FRENTE</strong> do seu concorrente, realize seu
                pré-cadastro e nosso time comercial vai entrar em contato.
              </span>
              <S.StartGapContact>
                <div>
                  <Icons.Whatsapp width={48} height={48} />
                  <span>Atendimento comercial</span>
                </div>
                <S.Button id="preRegister" onClick={handleGetIn}>
                  Realizar pré-cadastro
                </S.Button>
              </S.StartGapContact>
            </S.StartGap>
          </Section>

          <Section
            id="services"
            title="Conexão, comunicação e responsabilidade"
            description="A CONDHELP, conhece a importância dos Prestadores de Serviços e dos desafios de ofertar produtos ou serviços no setor condominial. Criamos uma solução exclusiva facilitando essa comunicação tão importante."
            big={true}
          >
            <S.Features>
              {f2.map((i, k) => (
                <S.FeatureLine key={k} $reverse={i.reverse} $dark={i.dark}>
                  {i.image && <img src={i.image} alt="" />}
                  <S.FeatureInfo $justText={!i.title}>
                    {i.title && (
                      <S.FeatureTitle $textCenter={!i.image}>
                        {i.title}
                      </S.FeatureTitle>
                    )}
                    <S.FeatureText>{i.text}</S.FeatureText>
                  </S.FeatureInfo>
                </S.FeatureLine>
              ))}
            </S.Features>
          </Section>

          <Section
            id={"providerRef"}
            title="Quero oferecer meu serviço ou produto"
          >
            <S.StartGap>
              <span>
                Saia na <strong>FRENTE</strong> do seu concorrente, realize seu
                pré-cadastro e nosso time comercial vai entrar em contato.
              </span>
              <S.StartGapContact>
                <div>
                  <Icons.Whatsapp width={48} height={48} />
                  <span>Atendimento comercial</span>
                </div>
                <S.Button id="preRegister" onClick={handleGetIn}>
                  Realizar pré-cadastro
                </S.Button>
              </S.StartGapContact>
            </S.StartGap>
          </Section>

          <Section title="Diversos produtos e serviços podem ser ofertados!">
            <S.SPGArea>
              <S.SPGExpandButton
                $opened={allServicesOpened}
                onClick={() => setAllServicesOpened(!allServicesOpened)}
              >
                <span>
                  Veja alguns dos serviços e manutenções disponíveis aqui!
                </span>
                <Icons.Dropdown />
              </S.SPGExpandButton>
              <S.SPGWrapper $opened={allServicesOpened}>
                <S.SPGContent $opened={allServicesOpened}>
                  <S.ServicesProductsGrid>
                    {availableServices.map((i, k) => (
                      <S.SPCategory key={k}>
                        {i.name ? (
                          <S.SPCategoryName>{i.name ?? " "}</S.SPCategoryName>
                        ) : (
                          <div style={{ height: 15, width: 1 }} />
                        )}
                        <S.SPList>
                          {i.list.map((ii, ik) => (
                            <S.SPItem key={ik}>{ii}</S.SPItem>
                          ))}
                        </S.SPList>
                      </S.SPCategory>
                    ))}
                  </S.ServicesProductsGrid>
                </S.SPGContent>
              </S.SPGWrapper>
            </S.SPGArea>
          </Section>
        </S.PageContent>
      </Container>
      <Footer />
    </S.Page>
  )
}

export default DetailsProvider
