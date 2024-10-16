import { useEffect, useState } from "react"
import * as S from "./styled"

import { Link, useLocation, useNavigate } from "react-router-dom"
import { menu } from "../../utils/system/menu"
import { Icons } from "../../assets/icons/icons"

type Props = {
  scrollPoint?: number
  floatFixed?: boolean
}

const Header = ({ scrollPoint = 0, floatFixed }: Props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [floating, setFloating] = useState(false)
  const [showing, setShowing] = useState(false)

  const toggleMenu = () => {
    setShowing(!showing)
  }

  const goHome = () => {
    navigate("/")
  }

  useEffect(() => {
    const breakPoint = window.innerHeight

    const ev = () => {
      setFloating(window.scrollY > (scrollPoint > 0 ? scrollPoint : breakPoint))
    }
    window.addEventListener("scroll", ev)

    return () => {
      window.removeEventListener("scroll", ev)
    }
  }, [scrollPoint])

  return (
    <S.Element
      $floating={floatFixed !== undefined ? floatFixed : floating}
      $opened={showing}
    >
      <S.BurguerButton onClick={toggleMenu}>
        <Icons.Burger width={24} height={24} />
      </S.BurguerButton>

      <Icons.LogoFull
        width={190}
        style={{ cursor: "pointer" }}
        onClick={goHome}
      />

      <S.Nav>
        {menu.map((mi, k) => (
          <S.MenuItem key={k}>
            <Link
              to={mi.link}
              onClick={(e) => {
                if (mi.link.startsWith("#")) {
                  // check current page
                  const currentPage = location.pathname

                  if (currentPage !== "/") {
                    e.preventDefault()
                    navigate("/", {
                      state: {
                        scrollId: mi.link.slice(mi.link.indexOf("#") + 1),
                      },
                    })
                  } else {
                    e.preventDefault()
                    const el = document.getElementById(mi.link.slice(1))

                    if (el) {
                      const pos =
                        el.getBoundingClientRect().top + window.pageYOffset
                      window.scrollTo({ top: pos - 200, behavior: "smooth" })
                    }
                  }
                }

                if (showing) toggleMenu()
              }}
            >
              {mi.text}
            </Link>
          </S.MenuItem>
        ))}
        <S.SignButton
          onClick={() => {
            window.location.href = "https://condhelp-front.vercel.app/login"
          }}
        >
          <Icons.UserCircle />
          <span>Entrar</span>
        </S.SignButton>
      </S.Nav>
    </S.Element>
  )
}

export default Header
