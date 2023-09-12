import styled, { css } from 'styled-components'
import { remCalc } from '../../../Utils/RemCalc'
import { Color } from '../../../Utils/Constans'

export const Container = styled.div`
  max-width: ${remCalc(860)};  
  display: flex;
  flex-direction: column;
  margin-top: ${remCalc(40)};
  margin-left: ${remCalc(60)};
  margin-bottom: ${remCalc(40)};
  font-style: normal;
`

export const WrapperSelects = styled.div`
  display: flex;
  max-width: ${remCalc(472)};
  width: 100%;

  & > div {
    width: 150px;
    margin-right: ${remCalc(20)};
  }
`

export const WrapperButtons = styled.div`
  height: ${remCalc(44)};
  max-width: ${remCalc(336)};
  display: flex;
  margin: ${remCalc(25)} 0 ${remCalc(30)} 0;
  font-weight: 500;
  font-size: ${remCalc(17)};
  line-height: 130%;
`

export const buttonCss = css`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: ${Color.lightGrey};

  &:hover {
    cursor: pointer;
  }
`

export const ButtonEven = styled.div<{ isEven: boolean }>`
  ${buttonCss}
  background-color: ${({ isEven }) => isEven ? `${Color.blueWhite}` : 'transparent'};
  border-width: ${remCalc(1)} 0 ${remCalc(1)} ${remCalc(1)};
  border-radius: 14px 0px 0px 14px;
`

export const ButtonNotEven = styled.div<{ isEven: boolean }>`
  ${buttonCss}
  background-color: ${({ isEven }) => isEven ? 'transparent' : `${Color.blueWhite}`};
  border-width: ${remCalc(1)} ${remCalc(1)} ${remCalc(1)} 0;
  border-radius: 0px 14px 14px 0px;
`
export const SheduleWeek = styled.div`
  width: ${remCalc(950)};
  display: flex;
  flex-direction: column;
`
export const SheduleDay = styled.div`
  width: ${remCalc(950)};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${remCalc(30)};
`
export const Day = styled.div`
  margin-top: ${remCalc(10)};
  font-weight: 500;
  font-size: ${remCalc(17)};
  line-height: 130%;
  color: ${Color.black};
`
export const ListSubjects = styled.div`
  width: ${remCalc(790)};
  display: flex;
  flex-direction: column;
`
export const EmptySubject = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${remCalc(790)};
  height: ${remCalc(48)};
  padding: ${remCalc(12)} ${remCalc(20)};
  background: ${Color.lightGrey};
  border-radius: ${remCalc(14)};
  margin-bottom: ${remCalc(8)};
  &:hover { 
    background: ${Color.blueWhite};
    cursor: pointer;
  }
`
export const Time = styled.div`
  font-weight: 600;
  font-size: ${remCalc(17)};
  line-height: 130%;
  color: ${Color.blue};
  margin-bottom: ${remCalc(5)};
`
export const buttonAddCss = css`
  width: ${remCalc(165)};
  height: ${remCalc(24)};
  border: 0;
  font-weight: 400;
  font-size: ${remCalc(17)};
  line-height: ${remCalc(22)};
  color: ${Color.black};
  background-color: transparent;

  &:hover {
    cursor: pointer;
    border: 0;
    color: ${Color.white};
    background-color: ${Color.blueDark};
  }
`
export const Subject = styled.div`
  position: relative;
  width: ${remCalc(790)};
  height: ${remCalc(136)};
  border-radius: ${remCalc(14)};
  background: ${Color.turquoise};
  padding: ${remCalc(18)} ${remCalc(60)} ${remCalc(18)} ${remCalc(20)};
  margin-bottom: ${remCalc(8)};
  &:hover {
    cursor: pointer;
    background: ${Color.blueWhite};
  }
`
export const TypeOfSubject = styled.div`
  position: absolute;
  top: ${remCalc(18)};
  right: ${remCalc(60)};
  min-width: ${remCalc(76)};
  height: ${remCalc(27)};
  border-radius: ${remCalc(6)};
  background: ${Color.blue};
  color: ${Color.white};
  padding: ${remCalc(4)} ${remCalc(10)};
  font-weight: 600;
  font-size: ${remCalc(15)};
  line-height: 130%;
`
export const TitleSubject = styled.div`
  color: ${Color.black};
  font-weight: 600;
  font-size: ${remCalc(17)};
  line-height: 130%;
  margin-bottom: ${remCalc(30)};
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${remCalc(710)};
  height: ${remCalc(19)};
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
  color: ${Color.black};
`
export const WrapperButtonsSubject = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${remCalc(40)};
  height: ${remCalc(136)};
  padding: ${remCalc(34)} ${remCalc(8)};
  background: ${Color.blue};
  border-radius: 0 ${remCalc(14)} ${remCalc(14)} 0;
`
export const buttonIconCss = css`
  width: ${remCalc(24)};
  height: ${remCalc(24)};
  background: transparent;
  padding: 0;
  border: 0;

  &:hover {
    background: transparent;
    padding: 0;
    border: 0;
  }
`
