import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { remCalc } from '../../../../Utils/RemCalc'
import { Color } from '../../../../Utils/Constans'

type InputWrapperProps = {
  isError: string | undefined | false;
  css?: FlattenSimpleInterpolation;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${remCalc(16)};
  position: relative;

  & > label {
    font-weight: 500;
    font-size: ${remCalc(16)};
    color: ${({ isError }) => isError ? `${Color.error}` : `${Color.black}`};
    margin-bottom: ${remCalc(15)};
  }

  & > input {
    padding: ${remCalc(14)} ${remCalc(20)} ${remCalc(16)};
    width: 100%;
    height: ${remCalc(51)};
    background: ${Color.lightGrey};
    border-radius: ${remCalc(14)};
    border: ${({ isError }) => isError ? `${remCalc(1)} solid ${Color.error}` : `${remCalc(1)} solid ${Color.lightGrey}`};
  }

  & > span {
    position: absolute;
    bottom: ${remCalc(-17)};
    color: ${Color.error};
  }

  ${({ css }) => css};
`
