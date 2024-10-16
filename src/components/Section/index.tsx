import * as S from "./styled"

type Props = {
  id?: string
  children?: JSX.Element | JSX.Element[]
  title?: string
  headerAlign?: string
  smallTitle?: boolean
  smallGap?: boolean
  description?: string
  big?: boolean
}

const Section = ({
  id,
  children,
  title,
  headerAlign,
  smallTitle,
  smallGap,
  description,
  big,
}: Props) => {
  return (
    <S.Component id={id ?? ""} $smallGap={smallGap}>
      <S.Head $align={headerAlign}>
        {title && <S.Title $small={smallTitle}>{title}</S.Title>}
        {description && <S.Description $big={big}>{description}</S.Description>}
      </S.Head>
      <S.Content>{children}</S.Content>
    </S.Component>
  )
}

export default Section
