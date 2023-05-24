import React from 'react'
import { Tooltip } from 'antd'
import { useNavigate } from 'react-router-dom'
import Plus from '../../../UI/Icons/Plus'
import { Container } from './EmptyNewsCardStyled'

const EmptyNewsCard: React.FC = () => {
  const navigate = useNavigate()

  const handelClick = () => {
    navigate('/EtuFlow/Home/Create')
  }

  return (
    <Container
      onClick={handelClick}
    >
      <Tooltip
        title='Добавить новость'
        mouseEnterDelay={0.25}
        mouseLeaveDelay={0.1}
      >
        <>
          <Plus />
        </>
      </Tooltip>
    </Container>
  )
}

export default EmptyNewsCard
