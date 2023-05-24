/* eslint no-use-before-define: 0 */
import React from 'react'
import { Select as SelectAntd } from 'antd'
import { FlattenSimpleInterpolation } from 'styled-components'
import { SelectLabel, SelectWrapper } from './SelectStyled'

type SelectProps = {
  label: string,
  disabled?: boolean,
  defaultValue?: string,
  onChange: (value?: string | undefined) => void,
  options?: {
    value: string | number,
    name: string,
  }[] | undefined,
  cssWrapper?: FlattenSimpleInterpolation,
  cssLabel?: FlattenSimpleInterpolation,
  value?: string | undefined | null,
}

const Select: React.FC<SelectProps> = ({
  label,
  disabled = false,
  defaultValue,
  onChange,
  options,
  cssWrapper,
  cssLabel,
  value,
}) => (
  <SelectWrapper css={cssWrapper}>
    <SelectLabel css={cssLabel}>{label}</SelectLabel>
    <SelectAntd
      options={options}
      disabled={disabled}
      defaultValue={defaultValue}
      onChange={onChange}
      value={value}
    />
  </SelectWrapper>
)

export default Select
