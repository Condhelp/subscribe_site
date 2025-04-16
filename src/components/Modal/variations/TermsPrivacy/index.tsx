import * as C from "../../styled"
import * as S from "./styled"

import { terms } from "../../../../utils/terms"
import { Icons } from "../../../../assets/icons/icons"

type Props = {
  onClose: () => void
  onSubmit?: () => void
}

const TermsPrivacy = ({ onClose }: Props) => {
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
        {terms.privacy.map((t, tk) =>
          t.type === "documentTitle" ? (
            <S.TermTitle key={tk} $documentTitle={true}>
              {t.content}
            </S.TermTitle>
          ) : t.type === "title" ? (
            <S.TermTitle key={tk}>{t.content}</S.TermTitle>
          ) : t.type === "text" ? (
            <S.TermText key={tk}>{t.content}</S.TermText>
          ) : t.type === "table" ? (
            <table style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {t.content.columns.map((c, ck) => (
                    <th key={ck}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.content.items.map((item, itemK) => (
                  <tr key={itemK}>
                    {item.map((d, dk) => (
                      <td key={dk}>{d}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <S.Divider />
          )
        )}

        <S.Bottom>
          <S.Button $disabled={false} onClick={onClose}>
            Fechar
          </S.Button>
        </S.Bottom>
      </S.Content>
    </S.Element>
  )
}

export default TermsPrivacy
