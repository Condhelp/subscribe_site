import * as S from "./styled"

type Props = {
  placeholder?: string
  label?: string
  value: string
  setValue: (v: string) => void
  align?: string
  padding?: number
  autoCapitalize?: boolean
  error?: {
    has: boolean
    message: string
  }
}

const Input = ({
  placeholder,
  label,
  value,
  setValue,
  align,
  padding,
  autoCapitalize,
  error,
}: Props) => {
  const handleValue = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <S.Component>
      {label && <S.Label $error={error?.has}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          value={value}
          onChange={handleValue}
          $padding={padding}
          $align={align}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize === false ? "off" : "unset"}
          $error={error?.has}
        />
      </S.InputWrapper>
      {error && (
        <S.ErrorMessage $visible={error.has}>{error.message}</S.ErrorMessage>
      )}
    </S.Component>
  )
}

export default Input
