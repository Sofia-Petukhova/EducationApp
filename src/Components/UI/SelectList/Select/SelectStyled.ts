import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { Color } from '../../../../Utils/Constans'
import { remCalc } from '../../../../Utils/RemCalc'

type SelectWrapperProps = {
  css?: FlattenSimpleInterpolation;
}

type SelectLabelProps = {
  css?: FlattenSimpleInterpolation;
}

export const SelectLabel = styled.div<SelectLabelProps>`
  color: ${Color.blue};
  font-weight: 500;
  font-size: ${remCalc(15)};
  width: 100%;
  height: fit-content;
  margin-bottom: ${remCalc(6)};

  ${({ css }) => css};
`
export const SelectWrapper = styled.div<SelectWrapperProps>`
  display: flex;
  flex-direction: column;

  ${({ css }) => css};
`
