import Input from "../Input"
import SelectDefault, { TSelectOption } from "../Select"
import * as S from "./styled"

type Props = {
  reverse?: boolean
  id?: string
  children?: JSX.Element | JSX.Element[]
  title?: string
  description?: string
  big?: boolean
  image?: string
  fields: (
    | {
        type: "input"
        field: string
        label: string
        placeholder: string
        value: string
      }
    | {
        type: "select"
        field: string
        label: string
        value: string | number
        options: TSelectOption[]
      }
  )[]
  onChange: (field: string, value: string | number) => void
  handleSubmit: () => void
  buttonText?: string
  disabled?: boolean
}

const FormBlock = ({
  reverse,
  id,
  title,
  description,
  big,
  fields,
  image,
  onChange,
  handleSubmit,
  buttonText,
  disabled,
}: Props) => {
  return (
    <S.Component $reverse={reverse} id={id ?? ""}>
      {image && <S.Image $img={image} />}
      <S.FormContent>
        <S.FormHeader>
          <S.Title>{title}</S.Title>
          <S.Description $big={big}>{description}</S.Description>
        </S.FormHeader>
        <S.FormFields>
          {fields.map((f, k) =>
            f.type === "input" ? (
              <Input
                key={k}
                padding={10}
                align={"left"}
                label={f.label}
                placeholder={f.placeholder}
                value={f.value}
                setValue={(v) => onChange(f.field, v)}
              />
            ) : f.type === "select" ? (
              <SelectDefault
                key={k}
                field={f.field}
                label={f.label}
                value={f.value}
                options={f.options}
                onChange={onChange}
              />
            ) : null
          )}

          <S.Button
            onClick={handleSubmit}
            disabled={disabled}
            $disabled={disabled}
          >
            {buttonText ?? "Solicitar orçamento"}
          </S.Button>
        </S.FormFields>
      </S.FormContent>
    </S.Component>
  )
}

export default FormBlock
