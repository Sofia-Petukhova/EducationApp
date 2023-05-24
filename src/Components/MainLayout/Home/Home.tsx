import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import { Container, WrapperNavigation, WrapperPage } from './HomeStyled'
import Header from '../Header/Header'

const Home: React.FC = () => (
  <Container>
    <WrapperNavigation>
      <Navigation />
    </WrapperNavigation>
    <WrapperPage>
      <Header />
      <Outlet />
    </WrapperPage>
  </Container>
)

export default Home
