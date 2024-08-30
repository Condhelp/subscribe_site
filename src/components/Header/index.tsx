import { useEffect, useState } from "react"
import * as S from "./styled"

import { Link } from "react-router-dom"
import { menu } from "../../utils/system/menu"
import { Icons } from "../../assets/icons/icons"

const Header = () => {
  const [floating, setFloating] = useState(false)
  const [showing, setShowing] = useState(false)

  const toggleMenu = () => {
    setShowing(!showing)
  }

  useEffect(() => {
    const breakPoint = window.innerHeight

    const ev = () => {
      setFloating(window.scrollY > breakPoint)
    }
    window.addEventListener("scroll", ev)

    return () => {
      window.removeEventListener("scroll", ev)
    }
  }, [])

  return (
    <S.Element $floating={floating} $opened={showing}>
      <S.BurguerButton onClick={toggleMenu}>
        <Icons.Burger width={24} height={24} />
      </S.BurguerButton>

      <Icons.LogoFull width={190} />

      <S.Nav>
        {menu.map((mi, k) => (
          <S.MenuItem key={k}>
            <Link
              to={mi.link}
              onClick={() => {
                if (showing) toggleMenu()
              }}
            >
              {mi.text}
            </Link>
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
