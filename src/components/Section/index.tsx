import * as S from "./styled"

type Props = {
  children?: JSX.Element | JSX.Element[]
  title?: string
  description?: string
  big?: boolean
}

const Section = ({ children, title, description, big }: Props) => {
  return (
    <S.Component>
      <S.Head>
        {title && <S.Title>{title}</S.Title>}
        {description && <S.Description $big={big}>{description}</S.Description>}
      </S.Head>
      <S.Content>{children}</S.Content>
    </S.Component>
  )
}

export default Section
