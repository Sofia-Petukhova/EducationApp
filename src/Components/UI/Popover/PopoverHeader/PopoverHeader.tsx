import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Title, WrapperItem } from './PopoverHeaderStyled'
import User from '../../Icons/User'
import { Color } from '../../../../Utils/Constans'
import LogOut from '../../Icons/LogOut'
import ModalExit from '../../Modal/ModalExit/ModalExit'

const PopoverHeader: React.FC = () => {
  const navigate = useNavigate()

  const handelClickProfile = () => {
    navigate('Profile')
  }

  const handelClickLogOut = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    navigate('/EtuFlow/Auth')
  }

  const [isOpenExit, setIsOpenExit] = useState(false)

  const OpenModalExit = () => {
    setIsOpenExit(true)
  }

  const CloseModalExit = () => {
    setIsOpenExit(false)
  }

  return (
    <Container>
      <WrapperItem
        onClick={handelClickProfile}
      >
        <User
          color={Color.blue}
        />
        <Title>Профиль</Title>
      </WrapperItem>
      <WrapperItem
        onClick={OpenModalExit}
      >
        <LogOut
          color={Color.blue}
        />
        <Title>Выйти</Title>
      </WrapperItem>
      <ModalExit
        open={isOpenExit}
        onClose={CloseModalExit}
        exit={handelClickLogOut}
        title='Вы действительно хотите выйти из аккаунта?'
      />
    </Container>
  )
}

export default PopoverHeader
