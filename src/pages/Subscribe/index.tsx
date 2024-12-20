/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import * as S from "./styled"
import { formatCpf } from "../../utils/masks/cpf"
import { formatPhone } from "../../utils/masks/phone"
import { checkDate, formatDate } from "../../utils/masks/date"
import { checkEmail } from "../../utils/masks/email"

import { Api } from "../../api"

import Container from "../../components/Container"
import Input from "../../components/Input"
import Modal from "../../components/Modal"

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

const Subscribe = () => {
  const [isMailing, setIsMailing] = useState<any>(false)
  const [modal, setModal] = useState<any>({
    title: "",
    message: "",
    visible: false,
  })
  const [termsModal, setTermsModal] = useState<any>({
    visible: false,
  })
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    birthdate: "",
    email: "",
    phone: "",
    condominium: "",
    code: "",
    robot: true,
    terms: false,
  })

  const handleGetIn = () => {
    const el = document.getElementById("formArea")

    if (el) {
      const pos = el.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: pos - 200, behavior: "smooth" })
    }
  }

  const checkForm = () => {
    let hasErrors = false

    if (form.name.trim().length === 0) hasErrors = true
    if (form.cpf.replace(/\D/g, "").trim().length < 11) hasErrors = true
    if (form.birthdate.trim().length === 0 || !checkDate(form.birthdate))
      hasErrors = true
    if (form.email.trim().length === 0 || !checkEmail(form.email))
      hasErrors = true
    if (form.phone.replace(/\D/g, "").trim().length < 10) hasErrors = true
    if (form.condominium.trim().length === 0) hasErrors = true
    if (form.robot) hasErrors = true
    if (!form.terms) hasErrors = true

    return hasErrors
  }

  const handleForm = (field: string, value: string | boolean) => {
    let v = value

    if (field === "name") v = (value as string).replace(/[^a-zA-Z0-9 ]/g, "")
    if (field === "cpf") v = formatCpf(value as string)
    if (field === "birthdate") v = formatDate(value as string)
    if (field === "phone") v = formatPhone(value as string)

    setForm((f) => ({ ...f, [field]: v }))
  }

  const pad = (v: number) => String(v).padStart(2, "0")

  const getInscriptionDate = () => {
    let str = ""

    const d = new Date()

    const [year, month, day, hour, minute] = [
      d.getFullYear(),
      pad(d.getMonth() + 1),
      pad(d.getDate()),
      pad(d.getHours()),
      pad(d.getMinutes()),
    ]

    str = `${day}/${month}/${year} ${hour}:${minute}`

    return str
  }

  const sendEmail = async () => {
    setIsMailing(true)

    try {
      const eventEdition = await Api.event.getInfo({})

      if (eventEdition.ok) {
        const mailing = await Api.email.sendEmail({
          date: eventEdition.data.date,
          local: eventEdition.data.local,
          localLink: eventEdition.data.localLink,
          code: form.code.toUpperCase(),
          inscriptionDate: getInscriptionDate(),
          subscriberName: form.name,
          subscriberEmail: form.email,
        })

        if (!mailing.ok) throw new Error(mailing.error)
      } else {
        throw new Error(
          "Houve um erro ao enviar seu email, mas sua inscrição está garantida. Entre em contato para mais informações"
        )
      }
    } catch (error) {}

    setIsMailing(false)
  }

  const handleFormSubmit = async () => {
    // ...
    const formOk = !checkForm()

    if (formOk) {
      const emailCheckage = await Api.subscription.checkEmail({
        email: form.email,
      })

      if (emailCheckage.ok) {
        const subscribe = await Api.subscription.subscribe(form)

        if (subscribe.ok) {
          setForm({
            birthdate: "",
            code: "",
            condominium: "",
            cpf: "",
            email: "",
            name: "",
            phone: "",
            robot: true,
            terms: false,
          })
          if (subscribe.data.waitingLine) {
            setModal({
              title: "A CONDHELP agradece seu interesse!",
              message:
                "Informamos que o limite das vagas para o nosso evento foram completadas. Esperamos você em outra oportunidade, até breve!",
              visible: true,
            })
          } else {
            setModal({
              title: "Inscrição feita com sucesso!",
              code: form.code,
              visible: true,
            })
          }

          if (!isMailing) sendEmail()
        } else {
          setModal({
            title: "Ops",
            message: subscribe.error,
            visible: true,
          })
        }
      } else {
        setModal({
          title: "Atenção!",
          message: emailCheckage.error,
          visible: true,
        })
      }
    } else {
      setModal({
        title: "Atenção!",
        message: "Preencha todos os dados corretamente.",
        visible: true,
      })
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <S.Page>
      <Modal
        role="submitStatus"
        data={modal}
        onClose={() => setModal((m: any) => ({ ...m, visible: false }))}
        visible={modal.visible}
      />

      <Modal
        role="terms"
        onClose={() => setTermsModal((m: any) => ({ ...m, visible: false }))}
        visible={termsModal.visible}
      />

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
            Conheça a experiência de fazer parte do próximo nível em sua{" "}
            <span>Gestão Condominial</span>.
          </S.PointText>
          <S.Testimonials>
            <Testimonial
              data={{
                image: speaker1,
                name: "Dr. Marcos Noronha",
                title: "Palestrante",
              }}
            />
            <Testimonial
              data={{
                image: speaker2,
                name: "Dra. Márcia Bernardes",
                title: "Psicodramista",
              }}
            />
          </S.Testimonials>
        </S.PointSection>

        <S.FormSection>
          <S.FormTitle>
            <span>Faça sua inscrição e participe!</span>
            <span>
              Dia 30/11/2024 às 14h – SEST SENAT – Jardim Atlântico –
              Florianópolis – SC.
            </span>
          </S.FormTitle>

          <S.FormArea id="formArea">
            <S.FormLine>
              <Input
                placeholder="Nome Completo"
                value={form.name}
                setValue={(value: string) => handleForm("name", value)}
              />
            </S.FormLine>
            <S.FormLine>
              <Input
                placeholder="CPF"
                value={form.cpf}
                setValue={(value: string) => handleForm("cpf", value)}
              />
              <Input
                placeholder="Data de nascimento"
                value={form.birthdate}
                setValue={(value: string) => handleForm("birthdate", value)}
              />
            </S.FormLine>
            <S.FormLine>
              <Input
                placeholder="E-mail"
                value={form.email}
                setValue={(value: string) => handleForm("email", value)}
                autoCapitalize={false}
              />
              <Input
                placeholder="Telefone"
                value={form.phone}
                setValue={(value: string) => handleForm("phone", value)}
              />
            </S.FormLine>
            <S.FormLine>
              <Input
                placeholder="Nome do seu condomínio"
                value={form.condominium}
                setValue={(value: string) => handleForm("condominium", value)}
              />
            </S.FormLine>
            <S.FormLine></S.FormLine>
          </S.FormArea>

          <S.FormInfo>
            <span>*A participação do evento de lançamento é </span>
            <b>gratuita</b>
            <span> e seus dados </span>
            <b>não serão</b>
            <span> compartilhados com terceiros.</span>
            <br />
            <span>Você receberá a confirmação de inscrição no e-mail.</span>
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
              onClick={!isMailing ? handleFormSubmit : undefined}
              disabled={checkForm() || isMailing}
              $disabled={checkForm() || isMailing}
            >
              Finalizar inscrição
            </S.SubmitBtn>
          </S.FormButtons>

          <S.TermsArea>
            <S.TermsCheckbox onClick={() => handleForm("terms", !form.terms)}>
              <S.RCheckbox type="checkbox" checked={form.terms} />
            </S.TermsCheckbox>
            <S.TermsMessage>
              <span>Eu aceito os termos da</span>
              <S.PrivacyButton
                onClick={() =>
                  setTermsModal((tm: any) => ({ ...tm, visible: true }))
                }
              >
                <span>política de privacidade</span>
              </S.PrivacyButton>
            </S.TermsMessage>
          </S.TermsArea>
        </S.FormSection>
      </Container>

      <Footer />
    </S.Page>
  )
}

export default Subscribe
