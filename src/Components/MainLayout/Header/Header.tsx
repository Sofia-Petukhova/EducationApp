import React, { useState } from 'react'
import { Popover } from 'antd'
import { Container, Date, Name, Userpic, Wrapper, WrapperUser } from './HeaderStyled'
import DownArrow from '../../UI/Icons/DownArow'
import { getDateHeader } from '../../../Utils/DateFormat'
import PopoverHeader from '../../UI/Popover/PopoverHeader/PopoverHeader'

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handlePopoverVisibleChange = () => {
    setIsVisible(!isVisible)
  }

  return (
    <Container>
      <Wrapper>
        <Date>
          {getDateHeader()}
        </Date>
        <Popover
          trigger='click'
          placement='bottomRight'
          visible={isVisible}
          onVisibleChange={handlePopoverVisibleChange}
          content={(
            <PopoverHeader />
          )}
          getPopupContainer={(triggerNode) => triggerNode}
        >
          <WrapperUser onClick={handlePopoverVisibleChange} isVisible={isVisible}>
            <Userpic background='http://www.nokiaplanet.com/uploads/posts/2012-09/1346678072_more.jpg' />
            <Name>
              Евгений Ч.
            </Name>
            <DownArrow />
          </WrapperUser>
        </Popover>
      </Wrapper>
    </Container>
  )
}

export default Header
