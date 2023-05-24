import styled from 'styled-components'
import { Color } from '../../../Utils/Constans'
import { remCalc } from '../../../Utils/RemCalc'

export const Container = styled.div`
  display: flex;
  background: ${Color.white};
  height: 100%;
  max-width: ${remCalc(1302)};
`

export const WrapperNavigation = styled.div`
  background: ${Color.blue};
  max-width: ${remCalc(312)};
  min-width: ${remCalc(312)};
`
export const WrapperPage = styled.div`
  width: 100%;
  min-width: ${remCalc(990)};
`
