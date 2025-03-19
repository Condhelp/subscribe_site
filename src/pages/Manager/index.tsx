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

const ManagerPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState(false)

  const [form, setForm] = useState({
    name: "",
    surname: "",
    city: "",
    email: "",
    phone: "",
  })

  useEffect(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0 })
    }
  }, [])

  const handleField = (field: string, value: any) => {
    setForm((frm) => ({
      ...frm,
      [field]: value,
    }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const obj = {
        name: form.name.trim(),
        surname: form.surname.trim(),
        city: form.city.trim(),
        email: form.email.trim(),
        phone: form.phone.replace(/\D/g, ""),
      }

      // call api...
      console.log(obj)
      setSubscribeStatus(true)
    } catch (error) {}

    setIsSubmitting(false)
  }

  const checkForm = () => {
    let hasErrors = false

    if (form.name.trim().length === 0) hasErrors = true
    if (form.surname.trim().length === 0) hasErrors = true
    if (form.city.trim().length === 0) hasErrors = true
    if (form.email.trim().length === 0 || !checkEmail(form.email))
      hasErrors = true
    if (form.phone.replace(/\D/g, "").trim().length < 11) hasErrors = true

    return hasErrors
  }

  return (
    <S.Page>
      <Header floatFixed={true} />

      <Modal
        role="subscribeStatus"
        onClose={() => {
          setSubscribeStatus(false)
        }}
        visible={subscribeStatus}
      />

      <Container>
        <S.PageContent>
          <S.FormArea>
            <FormBlock
              title="Cadastro Síndico"
              onChange={handleField}
              handleSubmit={handleSubmit}
              buttonText={"Realizar o cadastro"}
              disabled={checkForm() || isSubmitting}
              fields={[
                {
                  type: "input",
                  field: "name",
                  label: "Nome",
                  placeholder: "Digite aqui",
                  value: form.name,
                },
                {
                  type: "input",
                  field: "surname",
                  label: "Sobrenome",
                  placeholder: "Digite aqui",
                  value: form.surname,
                },
                {
                  type: "select",
                  field: "city",
                  label: "Cidade",
                  options: citiesOptions,
                  value: form.city,
                },
                {
                  type: "input",
                  field: "email",
                  label: "Email",
                  placeholder: "Digite aqui",
                  value: form.email.trim(),
                },
                {
                  type: "input",
                  field: "phone",
                  label: "Telefone",
                  placeholder: "Digite aqui",
                  value: formatPhone(form.phone),
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
