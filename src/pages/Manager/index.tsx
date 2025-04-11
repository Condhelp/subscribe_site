import { useEffect, useState } from "react"
import * as S from "./styled"

import Container from "../../components/Container"
import Footer from "../../components/Footer"

import Header from "../../components/Header"
import { citiesOptions } from "../../utils/system/cities"
import FormBlock, { TFormField } from "../../components/FormBlock"
import { checkEmail } from "../../utils/masks/email"
import { formatPhone } from "../../utils/masks/phone"
import Modal from "../../components/Modal"
import { Api } from "../../api"
import { formatCpf } from "../../utils/masks/cpf"
import Feedback from "../../components/Feedback"
import { cpfValidator } from "../../utils/validators/cpf"

type TErrorsCheck = {
  has: boolean
  fields: string[]
}

export type TFieldError = {
  has: boolean
  message?: string
}

const ManagerPage = () => {
  const [showTerms, setShowTerms] = useState(false)

  const [isOtherCity, setIsOtherCity] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState(false)

  const [subscribeError, setSubscribeError] = useState({
    has: false,
    message: "",
  })

  const [errors, setErrors] = useState<TErrorsCheck>({
    has: false,
    fields: [],
  })

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    city: "",
    otherCity: "",
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
      otherCity: "",
      email: "",
      phone: "",
      document: "",
    })
  }

  const handleField = (field: string, value: any) => {
    if (errors.has) {
      if (errors.fields.includes(field)) {
        const newFields = errors.fields.filter((f: any) => f !== field)
        setErrors({
          fields: newFields,
          has: newFields.length > 0,
        })
      }
    }

    if (field === "city") {
      if (value === "otherCity") {
        setIsOtherCity(true)
      } else {
        setIsOtherCity(false)
        setErrors((prev: any) => ({
          ...prev,
          fields: prev.fields.filter((f: any) => f !== "otherCity"),
        }))
      }
    }

    setForm((frm) => ({
      ...frm,
      [field]: value,
    }))
  }

  const timedCloseFeedback = (msg?: string) => {
    setTimeout(() => {
      setSubscribeError((prev) => ({
        ...prev,
        has: false,
        message: msg ?? prev.message,
      }))
      setTimeout(() => {
        setSubscribeError(() => ({ has: false, message: "" }))
      }, 500)
    }, 4000)
  }

  const getInvalidCheck = (actualState: TErrorsCheck, field: string) => {
    return {
      ...actualState,
      has: true,
      fields: [...actualState.fields, field],
    }
  }

  const checkForm = () => {
    let state: TErrorsCheck = {
      has: false,
      fields: [],
    }

    if (form.name.trim().length === 0) state = getInvalidCheck(state, "name")
    if (form.lastName.trim().length === 0)
      state = getInvalidCheck(state, "lastName")
    if (form.city.trim().length === 0) state = getInvalidCheck(state, "city")
    if (isOtherCity && form.otherCity.trim().length === 0)
      state = getInvalidCheck(state, "otherCity")
    if (form.email.trim().length === 0 || !checkEmail(form.email))
      state = getInvalidCheck(state, "email")
    if (form.phone.replace(/\D/g, "").trim().length < 11)
      state = getInvalidCheck(state, "phone")
    if (
      form.document.replace(/\D/g, "").trim().length < 11 ||
      !cpfValidator(form.document)
    )
      state = getInvalidCheck(state, "document")

    return state
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const errorInfo = checkForm()

      if (!errorInfo.has) {
        let obj: any = {
          name: form.name.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.replace(/\D/g, ""),
          document: form.document,
        }

        if (isOtherCity) {
          obj.otherCity = form.otherCity.trim()
        } else {
          obj.city = form.city.trim()
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
      } else {
        setErrors(errorInfo)
        timedCloseFeedback("Corrija os campos e tente novamente")
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
    handleSubmit()
    // setShowTerms(true)
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
              disabled={errors.has || isSubmitting}
              fields={[
                {
                  type: "input",
                  field: "name",
                  label: "Nome",
                  placeholder: "Digite aqui",
                  value: form.name,
                  padding: 14,
                  error: {
                    has: errors.fields.includes("name"),
                    message: "Este campo é obrigatório",
                  },
                },
                {
                  type: "input",
                  field: "lastName",
                  label: "Sobrenome",
                  placeholder: "Digite aqui",
                  value: form.lastName,
                  padding: 14,
                  error: {
                    has: errors.fields.includes("lastName"),
                    message: "Este campo é obrigatório",
                  },
                },
                {
                  type: "select",
                  field: "city",
                  label: "Cidade",
                  options: citiesOptions,
                  value: form.city,
                  padding: 14,
                  error: {
                    has: errors.fields.includes("city"),
                    message: "Este campo é obrigatório",
                  },
                },
                ...((isOtherCity
                  ? [
                      {
                        type: "input",
                        field: "otherCity",
                        label: "Nome da cidade",
                        placeholder: "Digite aqui",
                        value: form.otherCity,
                        padding: 14,
                        error: {
                          has: errors.fields.includes("otherCity"),
                          message: "Este campo é obrigatório",
                        },
                      },
                    ]
                  : []) as TFormField[]),
                {
                  type: "input",
                  field: "email",
                  label: "Email",
                  placeholder: "Digite aqui",
                  value: form.email.trim(),
                  padding: 14,
                  error: {
                    has: errors.fields.includes("email"),
                    message:
                      form.email.replace(/\D/g, "").length > 0 &&
                      !checkEmail(form.email)
                        ? "Digite um email válido"
                        : "Este campo é obrigatório",
                  },
                },
                {
                  type: "input",
                  field: "phone",
                  label: "Telefone",
                  placeholder: "Digite aqui",
                  value: formatPhone(form.phone),
                  padding: 14,
                  error: {
                    has: errors.fields.includes("phone"),
                    message:
                      form.email.replace(/\D/g, "").length > 0 &&
                      form.email.replace(/\D/g, "").length < 11
                        ? "Digite um telefone válido"
                        : "Este campo é obrigatório",
                  },
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
                    message:
                      form.document.replace(/\D/g, "").length === 0
                        ? "Este campo é obrigatório"
                        : form.document.replace(/\D/g, "").length === 11 &&
                          cpfValidator(form.document)
                        ? "Número do documento já está registrado."
                        : "Digite um documento válido",
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
