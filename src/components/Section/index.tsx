import * as S from "./styled"

type Props = {
  id?: string
  children?: JSX.Element | JSX.Element[]
  title?: string
  description?: string
  big?: boolean
}

const Section = ({ id, children, title, description, big }: Props) => {
  return (
    <S.Component id={id ?? ""}>
      <S.Head>
        {title && <S.Title>{title}</S.Title>}
        {description && <S.Description $big={big}>{description}</S.Description>}
      </S.Head>
      <S.Content>{children}</S.Content>
    </S.Component>
  )
}

export default Section
