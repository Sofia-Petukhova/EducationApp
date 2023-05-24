import styled, { css } from 'styled-components'
import { remCalc } from '../../../../Utils/RemCalc'
import { Color } from '../../../../Utils/Constans'

export const Container = styled.div`
  width: ${remCalc(860)};
  height: ${remCalc(600)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
`
export const Title = styled.div`
  max-width: ${remCalc(860)};
  max-height: ${remCalc(36)};
  color: ${Color.blue};
  font-weight: 600;
  font-size: ${remCalc(30)};
  text-align: center;
  line-height: ${remCalc(36)};
  margin-bottom: ${remCalc(30)};
`
export const WrapperInputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${remCalc(860)};
  max-height: ${remCalc(490)};
`
export const WrapperCheckbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  & .ant-checkbox, .ant-checkbox-input, .ant-checkbox-inner {
    width: ${remCalc(24)};
    height: ${remCalc(24)};
  }

  & .ant-checkbox-inner::after {
    width: ${remCalc(10)};
    height: ${remCalc(16)};
  }

  & .ant-checkbox-wrapper > .ant-checkbox+span{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #2C343E;
    padding-top: ${remCalc(2)};
  }
`

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${remCalc(420)};
  height: ${remCalc(490)}; 
`

export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: ${remCalc(860)};
`
export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${remCalc(450)};
  height: ${remCalc(52)}; 
`
