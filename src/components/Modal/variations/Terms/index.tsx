import { useState } from "react"
import * as C from "../../styled"
import * as S from "./styled"

import { Icons } from "../../../../assets/icons/icons"
import { terms } from "../../../../utils/terms"

type Props = {
  onClose: () => void
  onSubmit?: () => void
}

const SubscribeTerms = ({ onClose, onSubmit }: Props) => {
  const [accepted, setAccepted] = useState(false)

  const handleSubmit = () => {
    if (accepted && onClose && onSubmit) {
      onSubmit()
      onClose()
      setAccepted(false)
    }
  }

  return (
    <S.Element>
      <C.Header>
        <C.HeaderDefault>
          <C.HeaderMain>
            <S.ModalTitle></S.ModalTitle>
            <C.CloseBtn onClick={onClose}>
              <Icons.Close />
            </C.CloseBtn>
          </C.HeaderMain>
        </C.HeaderDefault>
      </C.Header>
      <S.Content>
        {terms.manager.map((t, tk) =>
          t.type === "documentTitle" ? (
            <S.TermTitle key={tk} $documentTitle={true}>
              {t.content}
            </S.TermTitle>
          ) : t.type === "title" ? (
            <S.TermTitle key={tk}>{t.content}</S.TermTitle>
          ) : t.type === "text" ? (
            <S.TermText key={tk}>{t.content}</S.TermText>
          ) : (
            <S.Divider />
          )
        )}

        <S.TermsAcceptArea
          $active={accepted}
          onClick={() => setAccepted(!accepted)}
        >
          <S.TAIndicator $active={accepted} />
          <S.TALabel>Aceito os termos.</S.TALabel>
        </S.TermsAcceptArea>

        <S.Bottom>
          <S.Button
            $disabled={!accepted}
            onClick={accepted ? handleSubmit : () => {}}
          >
            Continuar
          </S.Button>
        </S.Bottom>
      </S.Content>
    </S.Element>
  )
}

export default SubscribeTerms
