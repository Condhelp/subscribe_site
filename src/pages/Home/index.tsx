import { useEffect, useState } from "react"
import * as S from "./styled"
import { useLocation, useNavigate } from "react-router-dom"
import { availableServices } from "../../utils/system/services"
import { formatPhone } from "../../utils/masks/phone"
import { formatCnpj } from "../../utils/masks/cnpj"

import Container from "../../components/Container"
import ReactPlayer from "react-player"
import Footer from "../../components/Footer"
import Carousel from "../../components/Carousel"
import Services from "../../components/Services"
import FormBlock from "../../components/FormBlock"

// @ts-ignore
import Faq from "react-faq-component"

// speakers images
import easy from "../../assets/images/easy.png"
import Header from "../../components/Header"
import Section from "../../components/Section"

// features images
import schedule from "../../assets/images/schedule.png"
import chat from "../../assets/images/chat.png"
import graphic from "../../assets/images/graphic.png"
import broker from "../../assets/images/broker.png"
import direct from "../../assets/images/direct.png"
import checks from "../../assets/images/checks.png"
import providerFormImage from "../../assets/images/providerForm.png"
import { Icons } from "../../assets/icons/icons"
import { theme } from "../../theme"

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

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [allServicesOpened, setAllServicesOpened] = useState(true)

  const [providerForm, setProviderForm] = useState({
    name: "",
    fantasy: "",
    cnpj: "",
    email: "",
    phone: "",
  })
  const [managerForm, setManagerForm] = useState({
    name: "",
    surname: "",
    condName: "",
    cnpj: "",
    email: "",
    phone: "",
  })

  const handleGetIn = () => {
    navigate("/events")
  }

  const handleProviderField = (field: string, value: string | number) => {
    setProviderForm((pf) => ({
      ...pf,
      [field]: value,
    }))
  }

  const handleProviderSubmit = () => {
    // check errors
    // ...
  }

  const handleManagerField = (field: string, value: string | number) => {
    setManagerForm((mf) => ({
      ...mf,
      [field]: value,
    }))
  }

  const handleManagerSubmit = () => {
    // check errors
    // ...
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
      <Header />

      <S.Hero>
        <Container>
          <Carousel />
        </Container>
      </S.Hero>

      <Container>
        <S.PageContent>
          <Section
            id={"generalRef"}
            title="Simples, fácil e objetivo"
            description="Com a CONDHELP, a forma de fazer orçamentos nos Condomínios, ficou ainda mais simples. Transformamos essa etapa importante em apenas alguns cliques."
          >
            <S.Features>
              <S.FeatureLine $dark={false} $reverse={false}>
                <img src={easy} alt="" />
                <S.FeatureInfo>
                  <S.FeatureTitle>
                    Faça orçamentos para seus condomínios!
                  </S.FeatureTitle>
                  <S.FeatureText>
                    Conhecendo a responsabilidade que tem a função de Síndico,
                    criamos a conexão entre os desafios e as soluções para você
                    Síndico tirar nota 10 na sua prestação de contas.
                  </S.FeatureText>
                </S.FeatureInfo>
              </S.FeatureLine>
            </S.Features>
          </Section>

          <S.VideoArea>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=IwxWGHDfBCc"
              width={"100%"}
              height={"100%"}
              controls={true}
            />
          </S.VideoArea>

          <Services />

          <Section
            id="wantRegister"
            title="Quero me cadastrar"
            description="Crie uma conta, cadastre seus condomínios e tenha acesso gratuito aos seus orçamentos!"
          >
            <div style={{ margin: "auto" }}>
              <S.Button>Criar minha conta</S.Button>
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
              <S.Button>Criar minha conta</S.Button>
            </div>
          </Section>

          <Section>
            <FormBlock
              image={providerFormImage}
              title="Solicite agora mesmo seus orçamentos!"
              description="Os nossos prestadores vão receber uma notificação do seu pedido de orçamento e enviarão seus valores o mais breve possível."
              onChange={handleProviderField}
              handleSubmit={handleProviderSubmit}
              fields={[
                {
                  type: "input",
                  field: "name",
                  label: "Nome do responsável",
                  placeholder: "Digite aqui",
                  value: providerForm.name,
                },
                {
                  type: "input",
                  field: "fantasy",
                  label: "Nome fantasia",
                  placeholder: "Digite aqui fantasia",
                  value: providerForm.fantasy,
                },
                {
                  type: "input",
                  field: "cnpj",
                  label: "CNPJ",
                  placeholder: "Digite aqui",
                  value: formatCnpj(providerForm.cnpj),
                },
                {
                  type: "input",
                  field: "email",
                  label: "Email",
                  placeholder: "Digite aqui",
                  value: providerForm.email,
                },
                {
                  type: "input",
                  field: "phone",
                  label: "Telefone",
                  placeholder: "Digite aqui",
                  value: formatPhone(providerForm.phone),
                },
              ]}
            />
          </Section>

          <Section>
            <FormBlock
              reverse={true}
              image={providerFormImage}
              title="Solicite agora mesmo seus orçamentos!"
              description="Os nossos prestadores vão receber uma notificação do seu pedido de orçamento e enviarão seus valores o mais breve possível."
              onChange={handleManagerField}
              handleSubmit={handleManagerSubmit}
              fields={[
                {
                  type: "input",
                  field: "name",
                  label: "Nome",
                  placeholder: "Digite aqui",
                  value: managerForm.name,
                },
                {
                  type: "input",
                  field: "surname",
                  label: "Sobrenome",
                  placeholder: "Digite aqui",
                  value: managerForm.surname,
                },
                {
                  type: "input",
                  field: "condName",
                  label: "Nome Condomínio",
                  placeholder: "Digite aqui",
                  value: managerForm.condName,
                },
                {
                  type: "input",
                  field: "cnpj",
                  label: "CNPJ",
                  placeholder: "Digite aqui",
                  value: formatCnpj(managerForm.cnpj),
                },
                {
                  type: "input",
                  field: "email",
                  label: "Email",
                  placeholder: "Digite aqui",
                  value: managerForm.email,
                },
                {
                  type: "input",
                  field: "phone",
                  label: "Telefone",
                  placeholder: "Digite aqui",
                  value: formatPhone(managerForm.phone),
                },
              ]}
            />
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

          <Section id={"faqSection"}>
            <S.FaqContainer>
              <Faq data={faqData} styles={faqStyles} config={faqConfig} />
            </S.FaqContainer>
          </Section>
        </S.PageContent>
      </Container>
      <Footer />
    </S.Page>
  )
}

export default Home

const faqData = {
  title: "Perguntas frequentes",
  rows: [
    {
      title: "Pergunta 1",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Pergunta 2",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Pergunta 3",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
  ],
}

const faqStyles = {
  bgColor: "transparent",
  titleTextColor: theme.colors.neutral.grey,
  rowTitleColor: theme.colors.neutral.grey,
  rowContentColor: theme.colors.neutral.grey,
  rowContentPaddingTop: "10px",
  rowContentPaddingBottom: "10px",
  rowContentPaddingLeft: "32px",
  rowContentPaddingRight: "32px",
}

const faqConfig = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
}
