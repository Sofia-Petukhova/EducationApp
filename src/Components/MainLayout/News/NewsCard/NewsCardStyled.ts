import styled from 'styled-components'
import { remCalc } from '../../../../Utils/RemCalc'
import { Color } from '../../../../Utils/Constans'

type ContainerProps = {
  background: string | null;
}

type WrapperTextProps = {
  isEdit?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${remCalc(420)};
  height: ${remCalc(260)};
  padding: ${remCalc(20)};
  border-radius: ${remCalc(14)};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(157.04deg, rgba(0, 0, 0, 0) 3.14%, rgba(0, 0, 0, 0.8) 83.45%), ${({ background }) => `url(${background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 1s;

  &:hover {
    cursor: pointer;
    transform: scale(0.93);
  }
`

export const BoxEdit = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding: ${remCalc(11)} ${remCalc(20)};
  background: ${Color.blue};
  width: ${remCalc(104)};
  height: ${remCalc(44)};
  top: ${remCalc(10)};
  right: ${remCalc(0)};
  border-radius: ${remCalc(22)} 0 0 ${remCalc(22)};
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    width: ${remCalc(329)};
  }

  & > svg:first-of-type {
    margin-right: ${remCalc(20)};
  }
`
export const Wrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${remCalc(295)};
  font-weight: 500;
  font-size: ${remCalc(17)};
  line-height: 130%;
  color: ${Color.white};
`

export const WrapperEdit = styled.span`
  display: flex;
  align-items: center;
  width: ${remCalc(161)};
`
export const WrapperDelete = styled.span`
  display: flex;
  align-items: center;
  width: ${remCalc(102)};
`
export const WrapperText = styled.span<WrapperTextProps>`  
  margin-right: ${({ isEdit }) => isEdit ? remCalc(8) : remCalc(5)};
`

export const Title = styled.div`
  max-width: ${remCalc(320)};
  height: ${remCalc(44)};
  margin-bottom: ${remCalc(15)};
  font-style: normal;
  font-weight: 500;
  font-size: ${remCalc(17)};
  color: ${Color.white}; 
`
export const Date = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: ${remCalc(14)};
  color: ${Color.white};
`
export const CoinWrapper = styled.div`
  width: ${remCalc(60)};
  height: ${remCalc(32)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: ${remCalc(20)};
  bottom: ${remCalc(20)};
`
export const CoinIcon = styled.div`
  margin-right: ${remCalc(8)};
`
export const CoinCount = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: ${remCalc(17)};
  color: ${Color.white};
`
