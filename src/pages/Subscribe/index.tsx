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
import speaker1 from "../../assets/images/speakers/speaker_1.png"
import speaker2 from "../../assets/images/speakers/speaker_2.png"
import Input from "../../components/Input"
import { formatCpf } from "../../utils/masks/cpf"
import { formatPhone } from "../../utils/masks/phone"
import { checkDate, formatDate } from "../../utils/masks/date"
import { checkEmail } from "../../utils/masks/email"

const Subscribe = () => {
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
      <S.Hero>
        <img src={bgHero} alt={""} />

        <Container>
          <S.HeroContents>
            <S.Title>Vem aí, um novo conceito no mercado condominial</S.Title>
            <S.MainLogo src={mainLogo} alt={""} />
          </S.HeroContents>
        </Container>
      </S.Hero>
      <Container>
        <S.GetIn onClick={handleGetIn}>Participe do Lançamento</S.GetIn>
      </Container>

      <Container>
        <S.PointSection>
          <S.PointImage src={pointImage} alt={""} />
          <S.PointText>
            <span>Não é mais do mesmo</span>. Conheça a experiência de fazer
            parte do próximo nível em sua <span>Gestão Condominial</span>.
          </S.PointText>
          <S.Testimonials>
            <Testimonial
              data={{
                image: speaker1,
                name: "Regina Teixeira",
                title: "Como conviver em condomínio",
              }}
            />
            <Testimonial
              data={{
                image: speaker2,
                name: "Daniel Teixeira",
                title: "Como lapidar o Zelador?",
              }}
            />
          </S.Testimonials>
        </S.PointSection>

        <S.FomSection>
          <S.FormTitle>
            <span>Faça sua inscrição e participe!</span>
            <span>Dia XX/XX/2024 às XXhs - Microsoft Teams</span>
          </S.FormTitle>

          <S.FormArea>
            <S.FormLine>
              <Input
                label="Nome Completo"
                value={name}
                setValue={(value: string) => handleForm("name", value)}
              />
            </S.FormLine>
            <S.FormLine>
              <Input
                label="CPF"
                value={cpf}
                setValue={(value: string) => handleForm("cpf", value)}
              />
              <Input
                label="Data de nascimento"
                value={birthdate}
                setValue={(value: string) => handleForm("birthdate", value)}
              />
            </S.FormLine>
            <S.FormLine>
              <Input
                label="E-mail"
                value={email}
                setValue={(value: string) => handleForm("email", value)}
              />
              <Input
                label="Telefone"
                value={phone}
                setValue={(value: string) => handleForm("phone", value)}
              />
            </S.FormLine>
            <S.FormLine>
              <Input
                label="Nome do seu condomínio"
                value={condominium}
                setValue={setCondominium}
              />
            </S.FormLine>
          </S.FormArea>

          <S.FormInfo>
            <span>*A participação do evento de lançamento é </span>
            <b>gratuita</b>
            <span> e seus dados </span>
            <b>não serão</b>
            <span> compartilhados com terceiros.</span>
            <br />
            <span>Você receberá o convite no e-mail cadastrado.</span>
          </S.FormInfo>

          <S.FormButtons>
            <S.RecaptchaArea>
              <S.RLeft onClick={() => setRobot(!robot)}>
                <S.RCheckbox type="checkbox" checked={!robot} />
                <span>Não sou um robô</span>
              </S.RLeft>
              <S.RLogo src={recaptchaLogo} alt={""} />
            </S.RecaptchaArea>
            <S.SubmitBtn onClick={handleFormSubmit} $disabled={robot}>
              Finalizar inscrição
            </S.SubmitBtn>
          </S.FormButtons>
        </S.FomSection>
      </Container>

      <Footer />
    </S.Page>
  )
}

export default Subscribe
