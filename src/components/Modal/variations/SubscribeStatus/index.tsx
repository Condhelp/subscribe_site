import * as C from "../../styled"
import * as S from "./styled"

type Props = {
  onClose: () => void
}

const SubscribeStatus = ({ onClose }: Props) => {
  return (
    <S.Element>
      <C.Header>
        <C.HeaderDefault>
          <C.HeaderMain>
            <C.ModalTitle>Sistema CONDHELP</C.ModalTitle>
          </C.HeaderMain>
        </C.HeaderDefault>
      </C.Header>
      <S.Content>
        <S.Message>A CONDHELP se alegra em ter você por aqui!</S.Message>
        <S.Goodbye>
          Estamos preparando tudo com muito carinho...
          <br /><br />
          Toda inteligência e tecnologia do Sistema, estará voltada para que
          seus orçamentos sejam realizados de forma segura e eficaz.
          <br /><br />
          Fique atento, pois em breve vamos disponibilizar todos os recursos
          para você Síndico(a).
        </S.Goodbye>
        <S.Bottom>
          <S.Button onClick={onClose}>Fechar</S.Button>
        </S.Bottom>
      </S.Content>
    </S.Element>
  )
}

export default SubscribeStatus
