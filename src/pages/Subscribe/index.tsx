/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
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
import { Api } from "../../api"

const Subscribe = () => {
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    birthdate: "",
    email: "",
    phone: "",
    condominium: "",
    code: "",
    robot: true,
  })

  const handleGetIn = () => {
    // ...
    // scroll to form
  }

  const checkForm = () => {
    let hasErrors = false

    if (form.name.trim().length === 0) hasErrors = true
    if (form.cpf.trim().length === 0) hasErrors = true
    if (form.birthdate.trim().length === 0 || !checkDate(form.birthdate))
      hasErrors = true
    if (form.email.trim().length === 0 || !checkEmail(form.email))
      hasErrors = true
    if (form.phone.trim().length === 0) hasErrors = true
    if (form.condominium.trim().length === 0) hasErrors = true
    if (form.code.trim().length === 0) hasErrors = true
    if (form.robot) hasErrors = true

    return hasErrors
  }

  const handleForm = (field: string, value: string | boolean) => {
    let v = value

    if (field === "cpf") v = formatCpf(value as string)
    if (field === "birthdate") v = formatDate(value as string)
    if (field === "phone") v = formatPhone(value as string)

    setForm((f) => ({ ...f, [field]: v }))
  }

  const handleFormSubmit = async () => {
    // ...
    const formOk = !checkForm()

    if (formOk) {
      // ...

      // check code

      const checkCode = await Api.getCode({ code: form.code })

      if (checkCode.ok) {
        console.log("checkCode.data", checkCode.data)
        const used = checkCode.data.used
        if (used) alert("Este código não é mais válido")
        else {
          /*
           *  Continue form submittion
           */

          await Api.useCode({ code: form.code })

          alert("Inscrição feita com sucesso!")
        }
      } else {
        alert("Código inválido")
      }
    } else alert("Preencha todos os dados corretamente")
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

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
                value={form.name}
                setValue={(value: string) => handleForm("name", value)}
              />
            </S.FormLine>
            <S.FormLine>
              <Input
                label="CPF"
                value={form.cpf}
                setValue={(value: string) => handleForm("cpf", value)}
              />
              <Input
                label="Data de nascimento"
                value={form.birthdate}
                setValue={(value: string) => handleForm("birthdate", value)}
              />
            </S.FormLine>
            <S.FormLine>
              <Input
                label="E-mail"
                value={form.email}
                setValue={(value: string) => handleForm("email", value)}
              />
              <Input
                label="Telefone"
                value={form.phone}
                setValue={(value: string) => handleForm("phone", value)}
              />
            </S.FormLine>
            <S.FormLine>
              <Input
                label="Nome do seu condomínio"
                value={form.condominium}
                setValue={(value: string) => handleForm("condominium", value)}
              />
            </S.FormLine>
            <S.FormLine>
              <Input
                label="Código"
                value={form.code}
                setValue={(value: string) => handleForm("code", value)}
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
              <S.RLeft onClick={() => handleForm("robot", !form.robot)}>
                <S.RCheckbox type="checkbox" checked={!form.robot} />
                <span>Não sou um robô</span>
              </S.RLeft>
              <S.RLogo src={recaptchaLogo} alt={""} />
            </S.RecaptchaArea>
            <S.SubmitBtn
              onClick={handleFormSubmit}
              disabled={checkForm()}
              $disabled={checkForm()}
            >
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
