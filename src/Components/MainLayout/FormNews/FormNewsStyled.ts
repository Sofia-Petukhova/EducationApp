import styled, { css } from 'styled-components'
import { remCalc } from '../../../Utils/RemCalc'
import { Color } from '../../../Utils/Constans'

export const Container = styled.div`
  margin: ${remCalc(40)} 0 ${remCalc(40)} ${remCalc(130)};
  font-style: normal;
`
export const WrapperTitle = styled.div`
  display: flex;
  font-weight: 500;
  font-size: ${remCalc(30)};
  line-height: ${remCalc(36)};  
`
export const Title = styled.div`
  color: ${Color.graphite};
`
export const WrapperIcon = styled.div`
  margin: 0 ${remCalc(30)};
  display: flex;
  align-items: center;
`
export const Text = styled.div`
  color: ${Color.black};
`
export const WrapperForm = styled.div`
  margin: ${remCalc(30)} 0;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: ${remCalc(235)}; 
  width: ${remCalc(930)};
  margin-bottom: ${remCalc(50)};
`
export const WrapperInputImage = styled.div`
  min-width: ${remCalc(420)};
`
export const WrapperInputTitle = styled.div`
  min-width: ${remCalc(420)}; 
`
export const WrapperTextArea = styled.div`
  width: ${remCalc(930)};
  height: ${remCalc(316)}; 
`
export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  width: ${remCalc(930)};

    & > button:first-child {
    margin-right: ${remCalc(10)};
  }
`

export const inputCss = css`

  label {
    font-weight: 600;
    font-size: ${remCalc(20)};
    line-height: ${remCalc(24)};
    margin-bottom: ${remCalc(20)};
  }

  input {
    background: ${Color.white};
    font-style: normal;
    font-weight: 500;
    font-size: ${remCalc(17)};
    line-height: 130%;
    &:focus {
      border-color: ${Color.blue}};
    }

  span {
    font-size: ${remCalc(10)};
  }
`
export const LastInputCss = css`
  ${inputCss}
  label { 
    margin-top: ${remCalc(8)};
  }
`
