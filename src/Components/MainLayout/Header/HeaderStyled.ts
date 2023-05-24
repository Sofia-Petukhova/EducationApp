import styled from 'styled-components'
import { remCalc } from '../../../Utils/RemCalc'
import { Color } from '../../../Utils/Constans'

type UserpicProps = {
  background: string | null;
}

type WrapperUserProps = {
  isVisible: boolean;
}

export const Container = styled.div`
  height: ${remCalc(111)};
  padding: ${remCalc(40)} 0 ${remCalc(20)} ${remCalc(110)};
  margin-left: ${remCalc(20)};
  border-bottom: 1px solid ${Color.silver};
`
export const Wrapper = styled.div`
  max-width: ${remCalc(860)}; 
  display: flex;
  justify-content: space-between;
`

export const Date = styled.div`
  color: ${Color.blue};
  font-style: normal;
  font-weight: 500;
  font-size: ${remCalc(30)};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WrapperUser = styled.div<WrapperUserProps>`
  display: flex;
  align-items: center;
  min-width: ${remCalc(232)};
  height: ${remCalc(70)};
  border-radius: ${remCalc(14)} ${remCalc(14)} 0 0;
  padding: ${remCalc(10)} ${remCalc(16)};
  background-color: ${({ isVisible }) => isVisible && `${Color.lightGrey}`};
  transition: background-color 100ms ease-in-out;

  &:hover {
    background: ${Color.lightGrey};
    cursor: pointer;
  }

  & > .ant-popover .ant-popover-inner {
    margin-top: ${remCalc(-11)};
  }

  & > svg {
    transform: rotate(${({ isVisible }) => isVisible ? '180deg' : '0deg'});
    transition: transform 200ms ease-in-out;
  }
`
export const Userpic = styled.div<UserpicProps>`
  width: ${remCalc(50)};
  height: ${remCalc(50)};
  border: ${remCalc(1)} solid ${Color.blue};
  margin-right: ${remCalc(26)};
  border-radius: 50%;
  background: ${({ background }) => background ? `url(${background})` : ''};
`

export const Name = styled.div`
  color: ${Color.black};
  font-style: normal;
  font-weight: 500;
  font-size: ${remCalc(17)};
  margin-right: ${remCalc(10)};
`
