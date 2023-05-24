import styled, { css } from 'styled-components'
import { Color } from '../../../Utils/Constans'
import { remCalc } from '../../../Utils/RemCalc'

type LinkContainerProps = {
  isActive: boolean,
}

export const Container = styled.div`
  background: ${Color.blue};
  max-width: ${remCalc(312)};
  height: 100vh;
  width: 100%;
  padding: ${remCalc(40)} 0 ${remCalc(0)} ${remCalc(12)};
`

export const WrapperLogo = styled.div`
  margin-bottom: ${remCalc(40)};
`

export const WrapperList = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
`

export const LinkContainer = styled.div<LinkContainerProps>`
  display: flex;
  align-items: center;
  position: relative;
  min-height: ${remCalc(72)};
  padding-left: ${remCalc(47)};
  font-weight: 500;
  font-size: ${remCalc(17)};
  line-height: ${remCalc(21)};
  background: ${({ isActive }) => isActive ? `${Color.white}` : `${Color.blue}`};
  color: ${({ isActive }) => isActive ? `${Color.blue}` : `${Color.white}`};
  border-radius: ${remCalc(60)} 0 0 ${remCalc(60)};
  
  &:hover {
    cursor: pointer;
  }
`

export const SvgWrapper = styled.div`
  width: ${remCalc(32)};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.span`
  margin-left: ${remCalc(18)};
`

const styleElement = css`
  position: absolute;
  height: ${remCalc(72)};
  width: ${remCalc(80)};
  pointer-events: none;
`

export const Before = styled.div`
  ${styleElement}
  top: ${remCalc(-72)};
  border-radius: 0px 0px 80px 0px / 0px 0px 72px 0px;
  background: ${Color.blue};
  right: 0;
  z-index: 2;
`

export const WhiteBoxOne = styled.div`
  ${styleElement}
  top: ${remCalc(-72)};
  background: ${Color.white};
  right: 0;
`

export const After = styled.div`
  ${styleElement}
  bottom: ${remCalc(-72)};
  border-radius: 0px 80px 0px 0px / 0px 72px 0px 0px;
  background: ${Color.blue};
  right: 0;
  z-index: 2;
`

export const WhiteBoxTwo = styled.div`
  ${styleElement}
  bottom: ${remCalc(-72)};
  background: ${Color.white};
  right: 0;
  z-index: 1;
`
