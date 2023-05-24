import styled from 'styled-components'
import { remCalc } from '../../../Utils/RemCalc'
import { Color } from '../../../Utils/Constans'

export const Container = styled.div`
  max-width: ${remCalc(860)};  
  display: flex;
  flex-direction: column;
  margin-top: ${remCalc(40)};
  margin-left: ${remCalc(130)};
  margin-bottom: ${remCalc(40)};
`

export const WrapperCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, ${remCalc(260)});
  gap: ${remCalc(20)};
`
export const Title = styled.div`
  margin-bottom: ${remCalc(30)};
  font-style: normal;
  font-weight: 500;
  font-size: ${remCalc(30)};
  color: ${Color.black};
`
