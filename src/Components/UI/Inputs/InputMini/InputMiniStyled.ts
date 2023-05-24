import styled, { css } from 'styled-components'
import { remCalc } from '../../../../Utils/RemCalc'
import { Color } from '../../../../Utils/Constans'

export const inputMiniCss = css`
  margin-bottom: ${remCalc(20)};

  label {
    font-weight: 600;
    font-size: ${remCalc(20)};
    line-height: ${remCalc(24)};
    margin-bottom: ${remCalc(20)};
  }

  input {
    padding: ${remCalc(10)};
    width: ${remCalc(420)};
    height: ${remCalc(42)};
    background: ${Color.white};
    font-weight: 500;
    font-size: ${remCalc(17)};
    line-height: 130%; 
    color: ${Color.black};

    &:focus { 
      border-color: ${Color.blue};
    }

    &:hover { 
      cursor: pointer;
    }

    &::placeholder {
      color: ${Color.graphite}
    }
  }

  span {
    bottom: ${remCalc(-22)};
  }
`
