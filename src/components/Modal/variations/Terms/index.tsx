import * as C from "../../styled"
import * as S from "./styled"
import { termsText } from "./text"

type Props = {
  onClose: () => void
}

const SubmitStatus = ({ onClose }: Props) => {
  return (
    <S.Element>
      <C.Header>
        <C.HeaderDefault>
          <C.HeaderMain>
            <S.ModalTitle>Política de privacidade</S.ModalTitle>
          </C.HeaderMain>
        </C.HeaderDefault>
      </C.Header>
      <S.Content>
        {termsText.map((t, tk) =>
          t.type === "title" ? (
            <S.TermTitle key={tk}>{t.content}</S.TermTitle>
          ) : (
            <S.TermText key={tk}>{t.content}</S.TermText>
          )
        )}

        <S.Bottom>
          <S.Button onClick={onClose}>Fechar</S.Button>
        </S.Bottom>
      </S.Content>
    </S.Element>
  )
}

export default SubmitStatus
