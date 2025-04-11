import React, { useEffect, useRef, useState } from "react"
import * as C from "./_styles"
import * as S from "./styles"

import { ReactComponent as DropdownIcon } from "../../assets/icons/dropdown.svg"

export type TSelectOption = {
  key: string
  value: string | number
}

export type TInputSelect = {
  label: string
  field: string
  options: TSelectOption[]
  value: string | number | null
  padding?: number
  disabled?: boolean
  error?: {
    has: boolean
    message: string
  }
}

type Props = TInputSelect & {
  onChange: (field: string, v: any) => void
}

const SelectDefault = ({
  label,
  value,
  field,
  options,
  disabled,
  onChange,
  padding,
  error,
}: Props) => {
  const selectRef = useRef<HTMLDivElement>(null)

  const [showing, setShowing] = useState(false)
  const [selected, setSelected] = useState<any>({ value: "" })

  const toggleDropdown = () => {
    setShowing(!showing)
  }

  const handlePick = (picked: any) => {
    setSelected(picked)
    onChange(field, picked.key)
    setShowing(false)
  }

  useEffect(() => {
    const v = options.find((o) => o.key === value)

    if (value) setSelected(v)
    else if (options.length === 0) setSelected(options[0])
  }, [options, value, selected, options.length])

  useEffect(() => {
    const fn = (e: any) => {
      if (!selectRef.current?.contains(e.target) && showing) {
        toggleDropdown()
        document.removeEventListener("mousedown", fn)
      }
    }

    document.addEventListener("mousedown", fn)
  })

  return (
    <C.Wrapper>
      <S.Label $error={error?.has}>{label}</S.Label>
      <C.Area>
        <S.SelectArea ref={selectRef}>
          <S.DataArea
            onClick={!disabled ? toggleDropdown : undefined}
            className={showing ? "turnedIcon" : ""}
            $disabled={disabled}
            $padding={padding}
            $error={error?.has}
          >
            <S.Left>
              <S.SelectedInfo>
                {selected && selected.value ? selected?.value : `${label}...`}
              </S.SelectedInfo>
            </S.Left>
            <DropdownIcon width={16} height={16} />
          </S.DataArea>
          <S.OptionsArea className={showing ? "visible" : ""} $reverse={false}>
            {options.map((o, k) => (
              <S.Option key={k} onClick={() => handlePick(o)}>
                <span>{o.value}</span>
              </S.Option>
            ))}
          </S.OptionsArea>
        </S.SelectArea>

        {error && (
          <S.ErrorMessage $visible={error.has}>{error.message}</S.ErrorMessage>
        )}
      </C.Area>
    </C.Wrapper>
  )
}

export default SelectDefault
