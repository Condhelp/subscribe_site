import * as S from "./styled"

type Props = {
  placeholder?: string
  label?: string
  value: string
  setValue: (v: string) => void
  align?: string
  padding?: number
}

const Input = ({
  placeholder,
  label,
  value,
  setValue,
  align,
  padding,
}: Props) => {
  const handleValue = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <S.Component>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        value={value}
        onChange={handleValue}
        $padding={padding}
        $align={align}
        placeholder={placeholder}
      />
    </S.Component>
  )
}

export default Input
