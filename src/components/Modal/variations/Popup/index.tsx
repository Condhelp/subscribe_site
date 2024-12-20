import { Icons } from "../../../../assets/icons/icons"
import * as S from "./styled"

type Props = {
  img: string
  onClose: () => void
}

const Popup = ({ img, onClose }: Props) => {
  return (
    <S.Element>
      <S.Content>
        <S.Button onClick={onClose}>
          <Icons.Close />
        </S.Button>

        <img src={img} alt="" />
      </S.Content>
    </S.Element>
  )
}

export default Popup
