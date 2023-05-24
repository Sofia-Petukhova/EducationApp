import styled, { css } from 'styled-components'
import { remCalc } from '../../Utils/RemCalc'
import { Color } from '../../Utils/Constans'

export const WrapperLoader = styled.div`
  height: 100vh;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${Color.blue};
`

export const BoxForm = styled.div`
  display: flex;
  height: ${remCalc(538)};
  min-width: ${remCalc(925)};
  margin-right: 15vw;
`

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${remCalc(480)};
  width: 100%;
  border-right: ${remCalc(1)} solid ${Color.purple};
  margin: auto 0;

  & > svg {
    padding-right: ${remCalc(60)};
  }
`

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: ${remCalc(504)};
  max-height: ${remCalc(538)};
  margin-left: ${remCalc(60)};
  padding: ${remCalc(40)} ${remCalc(50)} ${remCalc(50)};
  background: ${Color.white};
  border-radius: 14px;
`

export const Title = styled.h1`
  color: ${Color.blue};
  margin-bottom: ${remCalc(50)};
  text-align: center;
  font-weight: 600;
  font-size: ${remCalc(28)};
  line-height: 130%;
`

export const buttonCss = css`
  margin: ${remCalc(35)} 0 ${remCalc(20)} 0; 
  width: ${remCalc(404)};
  height: ${remCalc(51)};
  padding: 0;
`

export const Subtitle = styled.span`
  color: ${Color.blue};
  font-weight: 500;
  font-size: ${remCalc(14)};
  line-height: 130%;
  text-align: center;

  &:hover {
    color: ${Color.purple};
    cursor: pointer;
  }
`
export const inputCss = css`
  & > span {
    font-size: ${remCalc(11)};
    bottom: ${remCalc(-14)};
  }
`
export const lastInputCss = css`
  margin-top: ${remCalc(5)};
  & > span {
    font-size: ${remCalc(11)};
    bottom: ${remCalc(-14)};
  }
`
