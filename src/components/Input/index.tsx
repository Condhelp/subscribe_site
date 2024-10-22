import * as S from "./styled"

type Props = {
  placeholder?: string
  label?: string
  value: string
  setValue: (v: string) => void
  align?: string
  padding?: number
  autoCapitalize?: boolean
}

const Input = ({
  placeholder,
  label,
  value,
  setValue,
  align,
  padding,
  autoCapitalize,
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
        autoCapitalize={autoCapitalize === false ? "off" : "unset"}
      />
    </S.Component>
  )
}

export default Input
