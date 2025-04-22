import * as S from "./styled"

type Props = {
  data?: any
  onClose: () => void
  onSubmit?: () => void
}

const AcceptCookies = ({ onClose }: Props) => {
  const handleSubmit = () => {
    if (onClose) {
      onClose()
      handleAccept()
    }
  }

  const handleAccept = () => {
    localStorage.setItem("condhelpAcceptedCookies", "true")
  }

  return (
    <S.Element>
      <S.Content>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <S.TermTitle
            style={{
              marginBottom: 18,
            }}
          >
            Aviso de Cookies
          </S.TermTitle>
          <S.TermText>
            Sua privacidade é importante para nós, utilizamos cookies para
            melhorar sua experiência, personalizar conteúdo e analisar nosso
            tráfego.
          </S.TermText>
          <S.TermText>
            Ao continuar navegando, você concorda com a nossa{" "}
            <a href={"/cookies.pdf"} target="_blank" rel="noopener noreferrer">
              Política de Cookies
            </a>
            .
          </S.TermText>
        </div>

        <S.Bottom>
          <S.Button $disabled={false} onClick={handleSubmit}>
            Aceitar Cookies
          </S.Button>
        </S.Bottom>
      </S.Content>
    </S.Element>
  )
}

export default AcceptCookies
