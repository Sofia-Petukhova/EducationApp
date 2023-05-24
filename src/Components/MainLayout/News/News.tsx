import React, { useEffect } from 'react'
import NewsCard from './NewsCard/NewsCard'
import EmptyNewsCard from './EmptyNewsCard/EmptyNewsCard'
import { Container, Title, WrapperCard } from './NewsStyled'
import Loader from '../../UI/Loader/Loader'

const News = () => (
  <Container>
    <Title>
      Новости
    </Title>
    <WrapperCard>
      <EmptyNewsCard />
    </WrapperCard>
  </Container>

)

export default News
