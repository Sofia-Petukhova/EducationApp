import React, { FC, ChangeEvent, FocusEvent } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'
import { TextAreaWrapper } from './TextAreaStyled'

type TextAreaProps = {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string | undefined | false;
  css?: FlattenSimpleInterpolation;
  rows?: number;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  rows,
  css,
}) => (
  <TextAreaWrapper isError={error} css={css}>
    <label htmlFor={name}>{label}</label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      rows={rows}
    />
    {error && <span>{error}</span>}
  </TextAreaWrapper>
)

export default TextArea
