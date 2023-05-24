import styled, { css } from 'styled-components'
import { remCalc } from '../../../Utils/RemCalc'
import { Color } from '../../../Utils/Constans'

export const Container = styled.div`
  max-width: ${remCalc(930)};  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-style: normal;
  margin: ${remCalc(40)} 0 ${remCalc(40)} ${remCalc(60)};
`

export const WrapperTitle = styled.div`
  width: ${remCalc(930)};
  max-height: ${remCalc(52)}; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.div`
  font-weight: 500;
  font-size: ${remCalc(30)};
  line-height: ${remCalc(36)};
  color: ${Color.black}; 
`

export const InputFile = styled.input`
  position: absolute;
  z-index: 1;
  opacity: 0;
  width: ${remCalc(220)}; 
  height: ${remCalc(52)};
  cursor: pointer;
`

export const WrapperButtons = styled.div`
  width: ${remCalc(460)};
  max-height: ${remCalc(52)};
  position: relative; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const buttonCss = css`
  width: ${remCalc(220)}; 
  height: ${remCalc(52)};
`
export const buttonExportCss = css`
  width: ${remCalc(220)}; 
  height: ${remCalc(52)};
  color: ${Color.blue};
  border: ${remCalc(1)} solid ${Color.blue};
  background: ${Color.white};

  &:hover { 
  background: ${Color.lightGrey};
  color: ${Color.blueDark};
  border: ${remCalc(1)} solid ${Color.blueDark};
  }
`

export const WrapperSelects = styled.div`
  display: flex;
  height: ${remCalc(71)};
  width: ${remCalc(347)};
  margin: ${remCalc(14)} 0 ${remCalc(20)};

  & > div {
    width: 100%;
    margin-right: ${remCalc(15)};
  }

  .ant-select {
    width: 100%;
  }
`

export const gridCss = css`
  display: grid;
  grid-template-columns: 25fr 25fr 25fr 15fr 10fr;
  grid-column-gap: ${remCalc(3)};
`

export const HeaderTable = styled.div`
  ${gridCss}
  height: ${remCalc(62)};
  width: 100%;
  background-color: ${Color.turquoise};
  border-bottom: ${remCalc(1)} solid ${Color.cloud};
  border-radius: ${remCalc(14)} ${remCalc(14)} 0 0;
`

export const TitleHeader = styled.div`
  color: ${Color.black};
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: ${remCalc(17)};
  line-height: 130%;
  width: 100%;
  padding: ${remCalc(18)} ${remCalc(16)} ${remCalc(20)};
`

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
`
export const WrapperUser = styled.div<{ isHead: boolean }>`
  ${gridCss}
  position: relative;
  font-style: normal;
  font-size: ${remCalc(17)};
  line-height: 130%;
  height: ${remCalc(68)};
  background-color: ${({ isHead }) => isHead ? `${Color.whiteGreen}` : 'transparent'};

  &:hover {
    background-color: ${({ isHead }) => isHead ? `${Color.hoverStudent}` : `${Color.turquoise}`};
    cursor: pointer;
  }

  & > div:first-child {
    font-weight: 600;
  }
`

export const WrapperTooltip = styled.div`
  position: absolute;
  height: ${remCalc(62)};
  display: flex;
  align-items: center;
  left: ${remCalc(-36)};
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${remCalc(16)};
`

export const WrapperIcons = styled.div`
  display: flex;
  align-items: center;
  
  & > svg:first-child {
    margin-right: ${remCalc(21)};
  }
`
