import * as S from "./styled"

type Props = {
  data: {
    image: string
    name: string
    title: string
  }
}

const Testimonial = ({ data }: Props) => {
  return (
    <S.Component>
      <S.Main>
        <S.Image src={data.image} alt={""} />
        <S.Speaker>
          <span>{data.name}</span>
        </S.Speaker>
      </S.Main>
      <S.Footer>
        <span>{data.title}</span>
      </S.Footer>
    </S.Component>
  )
}

export default Testimonial
