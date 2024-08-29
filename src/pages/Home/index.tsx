import { useState } from "react"
import * as S from "./styled"

import Container from "../../components/Container"

import Footer from "../../components/Footer"
import Testimonial from "../../components/Testimonial"

// layout resourses
import bgHero from "../../assets/images/bg_hero.png"
import mainLogo from "../../assets/images/full_logo.png"
import pointImage from "../../assets/images/point.png"
import recaptchaLogo from "../../assets/images/recaptchaLogo.png"

// speakers images
import easy from "../../assets/images/easy.png"
import Input from "../../components/Input"
import { formatCpf } from "../../utils/masks/cpf"
import { formatPhone } from "../../utils/masks/phone"
import { checkDate, formatDate } from "../../utils/masks/date"
import { checkEmail } from "../../utils/masks/email"
import Header from "../../components/Header"
import Section from "../../components/Section"
import Services from "../../components/Services"

const Home = () => {
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [condominium, setCondominium] = useState("")
  const [robot, setRobot] = useState(true)

  const handleGetIn = () => {
    // ...
  }

  const checkForm = () => {
    let hasErrors = true

    if (name.trim().length === 0) hasErrors = false
    if (cpf.trim().length === 0) hasErrors = false
    if (birthdate.trim().length === 0 && checkDate(birthdate)) hasErrors = false
    if (email.trim().length === 0 && checkEmail(email)) hasErrors = false
    if (phone.trim().length === 0) hasErrors = false
    if (condominium.trim().length === 0) hasErrors = false

    return hasErrors
  }

  const handleForm = (field: string, value: string) => {
    switch (field) {
      case "name":
        setName(value)
        break
      case "cpf":
        setCpf(formatCpf(value))
        break
      case "birthdate":
        setBirthdate(formatDate(value))
        break
      case "email":
        setEmail(value)
        break
      case "phone":
        setPhone(formatPhone(value))
        break
      case "condominium":
        setCondominium(value)
        break

      default:
        break
    }
  }

  const handleFormSubmit = async () => {
    // ...
    const formOk = checkForm()

    if (formOk) {
      // ...
      alert("Inscrição feita com sucesso!")
    } else alert("Preencha todos os dados corretamente")
  }

  return (
    <S.Page>
      <Header />

      <S.Hero>
        <Container>
          <S.HeroContents>
            <S.Title>Vem aí, um novo conceito no mercado condominial</S.Title>
            <S.MainLogo src={mainLogo} alt={""} />
          </S.HeroContents>
        </Container>
      </S.Hero>

      <Container>
        <Section
          title="Simples, Fácil e objetivo"
          description="Com a CONDHELP, a forma de fazer orçamentos nos Condomínios, ficou ainda mais simples. Transformamos essa etapa importante em apenas alguns cliques."
        >
          <S.Line>
            <img src={easy} alt="" />
            <S.LineColumn>
              <S.LineTitle>Faça orçamentos para seus condomínios!</S.LineTitle>
              <S.LineDescription>
                Conhecendo a responsabilidade que tem a função de Síndico,
                criamos a conexão entre os desafios e as soluções para você
                Síndico tirar nota 10 na sua prestação de contas.
              </S.LineDescription>
            </S.LineColumn>
          </S.Line>
        </Section>
      </Container>

      <Container>
        <S.VideoArea>
          <span>Área para Vídeo</span>
        </S.VideoArea>
      </Container>

      <Container>
        <Services />
      </Container>

      <Container>
        <Section title="Quero me cadastrar" description="Crie uma conta, cadastre seus condomínios e tenha acesso gratuito aos seus orçamentos!">
          <div style={{ margin: "auto" }}>
            <S.Button>Criar minha conta</S.Button>
          </div>
        </Section>
      </Container>

      <Footer />
    </S.Page>
  )
}

export default Home
