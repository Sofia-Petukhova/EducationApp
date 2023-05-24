import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { After, Before, Container, LinkContainer, SvgWrapper, Title, WhiteBoxOne, WhiteBoxTwo, WrapperList, WrapperLogo } from './NavigationStyled'
import LogoEtuFlow from '../../UI/Icons/LogoEtuFlow'
import { navigationTitles } from './Utils'
import { Color } from '../../../Utils/Constans'

const Navigation: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const pathParts = location.pathname.split('/').filter((part) => part !== '')
  const [isActive, setIsactive] = useState(pathParts[pathParts.length - 1] === 'Create'
    ? 'news' : pathParts[pathParts.length - 1])
  const onClickNavigation = (url: string) => {
    setIsactive(url)
    navigate(`${url}`)
  }

  const getColor = (url: string) => url === isActive ? Color.blue : Color.white

  return (
    <Container>
      <WrapperLogo>
        <LogoEtuFlow
          height='70'
          width='207'
        />
      </WrapperLogo>
      <WrapperList>
        {navigationTitles.map(({ title, icon, url }) => (
          <LinkContainer
            key={title}
            isActive={isActive === url}
            onClick={() => onClickNavigation(url)}
          >
            <SvgWrapper>{React.cloneElement(icon, { color: getColor(url) })}</SvgWrapper>
            <Title>{title}</Title>
            {isActive === url && (
            <>
              <Before />
              <WhiteBoxOne />
              <After />
              <WhiteBoxTwo />
            </>
            )}
          </LinkContainer>
        ))}
      </WrapperList>
    </Container>
  )
}

export default Navigation
