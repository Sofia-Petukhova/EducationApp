import styled from 'styled-components'
import { Color } from '../../../../Utils/Constans'
import { remCalc } from '../../../../Utils/RemCalc'

export const Container = styled.div`
  max-width: ${remCalc(360)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
`
export const WrapperIcon = styled.div`
  margin-top: ${remCalc(7)};
  margin-bottom: ${remCalc(25)};
`

export const Title = styled.div`
  max-height: ${remCalc(78)};
  color: ${Color.black};
  font-weight: 600;
  font-size: ${remCalc(30)};
  text-align: center;
  line-height: 130%;
  margin-bottom: ${remCalc(16)};
`

export const Text = styled.div`
  min-height: ${remCalc(38)};
  color: ${Color.darkGrey};
  font-weight: 500;
  font-size: ${remCalc(15)};
  text-align: center;
  line-height: 130%;
  margin-bottom: ${remCalc(30)};
`
