import styled, { css } from 'styled-components'
import { remCalc } from '../../../../Utils/RemCalc'
import { Color } from '../../../../Utils/Constans'

export const WrapperUploadImage = styled.div`
  width: ${remCalc(420)};
  height: ${remCalc(230)};
  position: relative;

  & > img {
  position: absolute;
  width: ${remCalc(420)};
  height: ${remCalc(230)};
  top: 0;
  left: 0;
  border-radius: ${remCalc(14)};
  }
`

export const InputUploader = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: ${remCalc(420)};
  height: ${remCalc(230)};
  cursor: pointer;
`

export const buttonCss = css`
  margin-top: ${remCalc(10)};
  width: ${remCalc(125)};
  height: ${remCalc(21)};
  padding: 0;
`
export const deleteButtonCss = css`
  ${buttonCss}
  width: ${remCalc(70)};
`

export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WrapperPlus = styled.div`
  border-radius: ${remCalc(14)}; 
  width: ${remCalc(420)};
  height: ${remCalc(230)};
  background-color: ${Color.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
`
