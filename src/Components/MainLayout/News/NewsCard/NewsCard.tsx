import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BoxEdit, CoinCount, CoinIcon, CoinWrapper, Container, Date, Title, Wrapper, WrapperDelete, WrapperEdit, WrapperText } from './NewsCardStyled'
import Coin from '../../../UI/Icons/Coin'
import Edit from '../../../UI/Icons/Edit'
import ModalDelete from '../../../UI/Modal/ModalDelete/ModalDelete'
import CrossNews from '../../../UI/Icons/CrossNews'
import ModalCheck from '../../../UI/Modal/ModalCheck/ModalCheck'
import { News } from '../../../../Utils/Types'
import { getDateNews } from '../../../../Utils/DateFormat'

type NewsCardProps = {
  news: News,
}

const NewsCard: React.FC<NewsCardProps> = ({
  news,
}) => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)
  const [isOpenDelete, setIsOpenDelete] = useState(false)
  const [isOpenCheck, setIsOpenCheck] = useState(false)

  const {
    id,
    title,
    image,
    coin_reward,
    date_created,
  } = news

  const OpenModalDelete = () => {
    setIsOpenDelete(true)
  }

  const CloseModalDelete = () => {
    setIsOpenDelete(false)
  }

  const DeleteNews = () => {
    setIsOpenDelete(false)
    setIsOpenCheck(true)
  }

  const CloseModalCheck = () => {
    setIsOpenCheck(false)
  }

  const handleClickEditNews = () => {
    navigate(`/EtuFlow/Home/Create?id=${id}`)
  }

  return (
    <Container background={image}>
      <BoxEdit
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <Wrapper>
            <WrapperEdit onClick={handleClickEditNews}>
              <WrapperText isEdit>Редактировать</WrapperText>
              <Edit />
            </WrapperEdit>
            <WrapperDelete onClick={OpenModalDelete}>
              <WrapperText>Удалить</WrapperText>
              <CrossNews />
            </WrapperDelete>
          </Wrapper>
        ) : (
          <>
            <Edit />
            <CrossNews />
          </>
        )}
      </BoxEdit>
      <Title>{title}</Title>
      <Date>{getDateNews(date_created)}</Date>
      <CoinWrapper>
        <CoinIcon>
          <Coin />
        </CoinIcon>
        <CoinCount>{coin_reward}</CoinCount>
      </CoinWrapper>
      <ModalDelete
        open={isOpenDelete}
        onClose={CloseModalDelete}
        deleted={DeleteNews}
        title='Вы уверены, что хотите удалить новость?'
        text='Впоследствии данные будут утеряны и их восстановление станет невозможным'
      />
      <ModalCheck
        open={isOpenCheck}
        onClose={CloseModalCheck}
        title='Новость удалена'
        text='Новость успешно удалена. Чтобы вернуться на страницу «Новости» нажмите кнопку ниже.'
      />
    </Container>
  )
}

export default NewsCard
