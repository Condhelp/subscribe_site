import { useState } from "react"
import * as S from "./styled"

type Props = {
  data?: any
  onClose: () => void
  onSubmit?: () => void
}

const AcceptCookies = ({ onClose }: Props) => {
  const [accepted, setAccepted] = useState(false)

  const handleSubmit = () => {
    if (onClose) {
      onClose()
      setAccepted(false)
      handleAccept()
    }
  }

  const handleAccept = () => {
    localStorage.setItem("condhelpAcceptedCookies", accepted ? "true" : "false")
  }

  return (
    <S.Element>
      <S.Content>
        <S.TermTitle>Sua privacidade é importante para nós</S.TermTitle>
        <S.TermText>
          Utilizamos cookies para melhorar sua experiência, personalizar
          conteúdo e analisar nosso tráfego.
        </S.TermText>
        <S.TermText>
          Ao continuar navegando, você concorda com a nossa{" "}
          <a href={"/cookies.pdf"} target="_blank" rel="noopener noreferrer">
            Política de Cookies
          </a>
          .
        </S.TermText>

        <S.TermsAcceptArea
          $active={accepted}
          onClick={() => setAccepted(!accepted)}
        >
          <S.TAIndicator $active={accepted} />
          <S.TALabel>Aceito o uso dos cookies.</S.TALabel>
        </S.TermsAcceptArea>

        <S.Bottom>
          <S.Button
            $disabled={!accepted}
            onClick={accepted ? handleSubmit : () => {}}
          >
            Aceitar
          </S.Button>
        </S.Bottom>
      </S.Content>
    </S.Element>
  )
}

export default AcceptCookies
