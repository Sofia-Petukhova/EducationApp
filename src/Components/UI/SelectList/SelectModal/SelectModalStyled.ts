import styled, { css } from 'styled-components'
import { remCalc } from '../../../../Utils/RemCalc'
import { Color } from '../../../../Utils/Constans'

export const selectWrapperCss = css`
  margin-bottom: ${remCalc(20)};
  width: ${remCalc(420)};  
`
export const selectLabelCss = css`
  color: ${Color.black}; 
  font-weight: 600;
  font-size: ${remCalc(20)};
  line-height: ${remCalc(24)};
  margin-bottom: ${remCalc(20)};
`
