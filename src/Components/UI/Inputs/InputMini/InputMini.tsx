import React, { FC, ChangeEvent, FocusEvent } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'
import Input from '../Input/Input'
import { inputMiniCss } from './InputMiniStyled'

type InputMiniProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  src?: string;
  alt?: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  error?: string | undefined | false;
  css?: FlattenSimpleInterpolation;
}

const InputMini: FC<InputMiniProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  src,
  alt,
  value,
  onChange,
  onBlur,
  error,
  css = inputMiniCss,
}) => (
  <Input
    label={label}
    name={name}
    type={type}
    placeholder={placeholder}
    src={src}
    alt={alt}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    error={error}
    css={css}
  />
)

export default InputMini
