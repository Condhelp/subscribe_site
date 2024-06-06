import * as S from "./styled"

type Props = {
  label: string
  value: string
  setValue: (v: string) => void
}

const Input = ({ label, value, setValue }: Props) => {
  const handleValue = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <S.Component>
      <S.Input value={value} onChange={handleValue} placeholder={label} />
    </S.Component>
  )
}

export default Input
