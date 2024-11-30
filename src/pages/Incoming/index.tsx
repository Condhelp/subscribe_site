import * as S from "./styled"

import image from "../../assets/images/incoming.png"

const IncomingPage = () => {
  return (
    <S.Page>
      <S.PageContent>
        <img src={image} alt={"Condhelp"} />
      </S.PageContent>

      <S.PageFooter>
        <span>© 2024 Todos os direitos reservados | CONDHELP</span>
      </S.PageFooter>
    </S.Page>
  )
}

export default IncomingPage
