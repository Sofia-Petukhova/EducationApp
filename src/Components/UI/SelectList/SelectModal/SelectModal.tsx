import React from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'
import Select from '../Select/Select'
import { selectLabelCss, selectWrapperCss } from './SelectModalStyled'

type SelectModalProps = {
  label: string,
  disabled?: boolean,
  defaultValue?: string,
  onChange: () => void,
  options: {
    value: string,
    name: string,
  }[] | undefined,
  cssWrapper?: FlattenSimpleInterpolation,
  cssLabel?: FlattenSimpleInterpolation,
}

const SelectModal: React.FC<SelectModalProps> = ({
  label,
  disabled = false,
  defaultValue,
  onChange,
  options,
  cssWrapper = selectWrapperCss,
  cssLabel = selectLabelCss,
}) => (
  <Select
    label={label}
    disabled={disabled}
    defaultValue={defaultValue}
    onChange={onChange}
    options={options}
    cssWrapper={cssWrapper}
    cssLabel={cssLabel}
  />
)

export default SelectModal
