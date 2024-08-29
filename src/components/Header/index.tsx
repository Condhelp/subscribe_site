import * as S from "./styled"
import { Link } from "react-router-dom"
import { menu } from "../../utils/system/menu"
import { Icons } from "../../assets/icons/icons"

const Header = () => {
  return (
    <S.Element>
      <Icons.LogoFull width={190} />

      <S.Nav>
        {menu.map((mi, k) => (
          <S.MenuItem key={k}>
            <Link to={mi.link}>{mi.text}</Link>
          </S.MenuItem>
        ))}
        <S.SignButton>
          <Icons.UserCircle />
          <span>Entrar</span>
        </S.SignButton>
      </S.Nav>
    </S.Element>
  )
}

export default Header
