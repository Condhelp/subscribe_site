import * as S from "./styled"
import { ReactComponent as Logo } from "../../assets/icons/logo_dark.svg"
import Container from "../Container"
import { footer } from "../../utils/system/menu"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <S.Component>
      <Container>
        <S.Disclaimer>
          <span>Atenção</span>
          <span>
            A CONDHELP se orgulha de ser uma plataforma inovadora que conecta
            você às melhores soluções do mercado. Embora não ofereçamos
            garantias diretas sobre os produtos e serviços fornecidos, estamos
            comprometidos em facilitar seu acesso a uma ampla rede de
            fornecedores confiáveis. Vale lembrar que a responsabilidade pela
            contratação dos serviços ou aquisição de produtos fica a cargo do
            Síndico, permitindo que você tenha autonomia e liberdade para
            escolher o que melhor atende às suas necessidades. Qualquer questão
            relacionada à qualidade ou eventuais contratempos será diretamente
            gerida com o fornecedor escolhido, garantindo que a relação entre
            ambas as partes seja clara e transparente.
          </span>
        </S.Disclaimer>
        <S.Main>
          <Logo />

          <S.Nav>
            <span>2024 © Todos os direitos reservados</span>
            <span>|</span>

            {footer.map((mi, k) => (
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
                          window.scrollTo({
                            top: pos - 200,
                            behavior: "smooth",
                          })
                        }
                      }
                    }
                  }}
                >
                  {mi.text}
                </Link>
              </S.MenuItem>
            ))}
          </S.Nav>
        </S.Main>
      </Container>
    </S.Component>
  )
}

export default Footer
