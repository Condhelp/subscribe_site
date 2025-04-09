import { useEffect, useState } from "react"
import * as S from "./styled"

import Container from "../../components/Container"
import Footer from "../../components/Footer"

import Header from "../../components/Header"
import { citiesOptions } from "../../utils/system/cities"
import FormBlock from "../../components/FormBlock"
import { checkEmail } from "../../utils/masks/email"
import { formatPhone } from "../../utils/masks/phone"
import Modal from "../../components/Modal"
import { Api } from "../../api"
import { formatCpf } from "../../utils/masks/cpf"
import Feedback from "../../components/Feedback"
import { cpfValidator } from "../../utils/validators/cpf"

const ManagerPage = () => {
  const [showTerms, setShowTerms] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState(false)

  const [subscribeError, setSubscribeError] = useState({
    has: false,
    message: "",
  })

  const [errors, setErrors] = useState<any>({
    has: false,
    fields: [],
  })

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    city: "",
    email: "",
    phone: "",
    document: "",
  })

  useEffect(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0 })
    }
  }, [])

  const clearForm = () => {
    setForm({
      name: "",
      lastName: "",
      city: "",
      email: "",
      phone: "",
      document: "",
    })
  }

  const handleField = (field: string, value: any) => {
    if (errors.has) {
      if (errors.fields.includes(field)) {
        setErrors((prev: any) => ({
          ...prev,
          fields: prev.fields.filter((f: any) => f !== field),
        }))
      }
    }
    setForm((frm) => ({
      ...frm,
      [field]: value,
    }))
  }

  const timedCloseFeedback = () => {
    setTimeout(() => {
      setSubscribeError((prev) => ({ ...prev, has: false }))
      setTimeout(() => {
        setSubscribeError(() => ({ has: false, message: "" }))
      }, 500)
    }, 4000)
  }

  const checkForm = () => {
    let hasErrors = false

    if (form.name.trim().length === 0) hasErrors = true
    if (form.lastName.trim().length === 0) hasErrors = true
    if (form.city.trim().length === 0) hasErrors = true
    if (form.email.trim().length === 0 || !checkEmail(form.email))
      hasErrors = true
    if (form.phone.replace(/\D/g, "").trim().length < 11) hasErrors = true
    if (
      form.document.replace(/\D/g, "").trim().length < 11 ||
      !cpfValidator(form.document)
    )
      hasErrors = true

    return hasErrors
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const obj = {
        name: form.name.trim(),
        lastName: form.lastName.trim(),
        city: form.city.trim(),
        email: form.email.trim(),
        phone: form.phone.replace(/\D/g, ""),
        document: form.document,
      }

      const req = await Api.manager.signUp(obj)

      if (req.ok) {
        setSubscribeStatus(true)
      } else {
        setSubscribeError({
          has: true,
          message: req.error,
        })

        timedCloseFeedback()

        if (req.error === "Número do documento já está registrado.") {
          setErrors({
            has: true,
            fields: ["document"],
          })
        }
      }
    } catch (error) {
      setSubscribeError({
        has: true,
        message:
          "Não foi possível concluir o cadastro. Tente novamente mais tarde.",
      })

      timedCloseFeedback()
    }

    setIsSubmitting(false)
  }

  const handleTerms = () => {
    setShowTerms(true)
  }

  return (
    <S.Page>
      <Modal
        onClose={() => setShowTerms(false)}
        role="terms"
        visible={showTerms}
        onSubmit={handleSubmit}
      />

      <Feedback
        data={{
          visible: subscribeError.has,
          message: subscribeError.message,
          state: "alert",
        }}
      />

      <Header floatFixed={true} />

      <Modal
        role="subscribeStatus"
        onClose={() => {
          setSubscribeStatus(false)
          clearForm()
        }}
        visible={subscribeStatus}
      />

      <Container fullHeight={true}>
        <S.PageContent>
          <S.FormArea>
            <FormBlock
              title="Cadastro Síndico"
              onChange={handleField}
              handleSubmit={handleTerms}
              buttonText={"Realizar o cadastro"}
              disabled={checkForm() || isSubmitting}
              fields={[
                {
                  type: "input",
                  field: "name",
                  label: "Nome",
                  placeholder: "Digite aqui",
                  value: form.name,
                  padding: 14,
                },
                {
                  type: "input",
                  field: "lastName",
                  label: "Sobrenome",
                  placeholder: "Digite aqui",
                  value: form.lastName,
                  padding: 14,
                },
                {
                  type: "select",
                  field: "city",
                  label: "Cidade",
                  options: citiesOptions,
                  value: form.city,
                  padding: 14,
                },
                {
                  type: "input",
                  field: "email",
                  label: "Email",
                  placeholder: "Digite aqui",
                  value: form.email.trim(),
                  padding: 14,
                },
                {
                  type: "input",
                  field: "phone",
                  label: "Telefone",
                  placeholder: "Digite aqui",
                  value: formatPhone(form.phone),
                  padding: 14,
                },
                {
                  type: "input",
                  field: "document",
                  label: "CPF",
                  placeholder: "Digite aqui",
                  value: formatCpf(form.document),
                  padding: 14,
                  error: {
                    has: errors.fields.includes("document"),
                    message: "Número do documento já está registrado.",
                  },
                },
              ]}
            />
          </S.FormArea>
        </S.PageContent>
      </Container>
      <Footer />
    </S.Page>
  )
}

export default ManagerPage
