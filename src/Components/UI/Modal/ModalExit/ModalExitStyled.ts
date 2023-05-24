import styled from 'styled-components'
import { Color } from '../../../../Utils/Constans'
import { remCalc } from '../../../../Utils/RemCalc'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  max-width: ${remCalc(400)};
  max-height: ${remCalc(78)};
  color: ${Color.black};
  font-weight: 600;
  font-size: ${remCalc(30)};
  text-align: center;
  line-height: 130%;
  margin-bottom: ${remCalc(16)};
`

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${remCalc(460)};
  height: ${remCalc(52)}; 
`
