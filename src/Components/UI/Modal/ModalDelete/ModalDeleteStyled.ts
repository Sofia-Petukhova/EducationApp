import styled from 'styled-components'
import { Color } from '../../../../Utils/Constans'
import { remCalc } from '../../../../Utils/RemCalc'

export const Container = styled.div`
  max-width: ${remCalc(540)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
`
export const WrapperIcon = styled.div`
  margin-bottom: ${remCalc(30)};
`

export const Title = styled.div`
  max-width: ${remCalc(460)};
  max-height: ${remCalc(78)};
  color: ${Color.black};
  font-weight: 600;
  font-size: ${remCalc(30)};
  text-align: center;
  line-height: 130%;
  margin-bottom: ${remCalc(16)};
`

export const Text = styled.div`
  max-width: ${remCalc(460)};
  max-height: ${remCalc(38)};
  color: ${Color.darkGrey};
  font-weight: 500;
  font-size: ${remCalc(15)};
  text-align: center;
  line-height: 130%;
  margin-bottom: ${remCalc(30)};
`

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${remCalc(460)};
  height: ${remCalc(52)}; 
`
