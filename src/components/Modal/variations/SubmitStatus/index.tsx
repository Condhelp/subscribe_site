import * as C from "../../styled"
import * as S from "./styled"

import { ReactComponent as CloseIcon } from "../../../../assets/icons/close.svg"

type Props = {
  data: {
    title: string
    message?: string
    code?: string
  }
  onClose: () => void
}

const SubmitStatus = ({ data, onClose }: Props) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <S.Element>
      <C.Header>
        <C.HeaderDefault>
          <C.HeaderMain>
            <C.ModalTitle>{data.title}</C.ModalTitle>
            <C.CloseBtn onClick={handleClose}>
              <CloseIcon />
            </C.CloseBtn>
          </C.HeaderMain>
        </C.HeaderDefault>
      </C.Header>
      <S.Content>
        {data.message && <S.Message>{data.message}</S.Message>}
        {data.code && <S.Message>Código: {data.code}</S.Message>}
        {data.code && (
          <S.Goodbye>
            Veja mais informações em seu e-mail.
            <br />
            Até breve!
          </S.Goodbye>
        )}
        <S.Bottom>
          <S.Button onClick={onClose}>Fechar</S.Button>
        </S.Bottom>
      </S.Content>
    </S.Element>
  )
}

export default SubmitStatus
