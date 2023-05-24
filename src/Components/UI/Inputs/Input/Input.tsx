import React, { FC, ChangeEvent, FocusEvent } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'
import { InputWrapper } from './InputStyled'

type InputProps = {
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

const Input: FC<InputProps> = ({
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
  css,
}) => (
  <InputWrapper isError={error} css={css}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      src={src}
      alt={alt}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <span>{error}</span>}
  </InputWrapper>
)

export default Input
