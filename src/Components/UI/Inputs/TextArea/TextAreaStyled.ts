import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { remCalc } from '../../../../Utils/RemCalc'
import { Color } from '../../../../Utils/Constans'

type TextAreaWrapperProps = {
  isError: string | undefined | false;
  css?: FlattenSimpleInterpolation;
}

export const TextAreaWrapper = styled.div<TextAreaWrapperProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${remCalc(16)};
  position: relative;

  & > label {
    font-weight: 600;
    font-size: ${remCalc(20)};
    line-height: ${remCalc(24)};
    color: ${({ isError }) => isError ? `${Color.error}` : `${Color.black}`};
    margin-bottom: ${remCalc(20)};
  }

  & > textarea {
    font-style: normal;
    font-weight: 500;
    font-size: ${remCalc(17)};
    letter-spacing: 0.5px;
    word-spacing: 1px;
    line-height: 130%;
    padding: ${remCalc(10)};
    width: ${remCalc(930)};
    height: ${remCalc(272)};
    background: ${Color.white};
    border-radius: ${remCalc(14)};
    border: ${({ isError }) => isError ? `${remCalc(1)} solid ${Color.error}` : `${remCalc(1)} solid ${Color.lightGrey}`};
    &:focus { 
      border-color: ${Color.blue};
    }  
  }

  & > span {
    position: absolute;
    bottom: ${remCalc(-17)};
    color: ${Color.error};
    font-size: ${remCalc(10)};
  }

  ${({ css }) => css};
`
