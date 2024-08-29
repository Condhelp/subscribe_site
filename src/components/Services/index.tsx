import * as S from "./styled"
import Container from "../Container"
import { Icons } from "../../assets/icons/icons"

const list = [
  { icon: <Icons.Hidro />, title: "Hidráulica" },
  { icon: <Icons.Structure />, title: "Estrutural" },
  { icon: <Icons.Elevator />, title: "Elevadores" },
  { icon: <Icons.Garden />, title: "Jardinagem" },
  { icon: <Icons.Trash />, title: "Limpeza" },
  { icon: <Icons.Lamp />, title: "Elétrica" },
  { icon: <Icons.Finger />, title: "Acesso" },
  { icon: <Icons.Fire />, title: "Incêndio" },
  { icon: <Icons.Security />, title: "Segurança" },
  { icon: <Icons.Copy />, title: "Laudos" },
  { icon: <Icons.Check />, title: "Certificados" },
  { icon: <Icons.Calculator />, title: "Contabilidade" },
]

const Services = () => {
  return (
    <Container>
      <S.Component>
        <S.Title>Serviços e manutenções mais procurados</S.Title>
        <S.SGrid>
          {list.map((i, k) => (
            <S.SGridItem key={k}>
              {i.icon}
              <span>{i.title}</span>
            </S.SGridItem>
          ))}
        </S.SGrid>
      </S.Component>
    </Container>
  )
}

export default Services
