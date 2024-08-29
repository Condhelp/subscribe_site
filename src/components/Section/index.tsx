import * as S from "./styled"

type Props = {
  children?: JSX.Element | JSX.Element[]
  title: string
  description: string
}

const Section = ({ children, title, description }: Props) => {
  return (
    <S.Component>
      <S.Head>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Head>
      <S.Content>{children}</S.Content>
    </S.Component>
  )
}

export default Section
