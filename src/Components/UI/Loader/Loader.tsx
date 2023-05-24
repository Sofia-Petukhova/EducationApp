import React from 'react'
import LogoLoading from '../Icons/LogoLoading'
import { Container, SpinContainer } from './LoaderStyled'

type LoaderProps = {
  width?: string,
  height?: string
}

const Loader: React.FC< LoaderProps> = ({
  width = '193px',
  height = '193px',
}) => (
  <Container>
    <SpinContainer width={width} height={height}>
      <LogoLoading />
    </SpinContainer>
  </Container>
)

export default Loader
