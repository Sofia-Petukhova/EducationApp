import React from 'react'
import Modal from '../ModalDefault/Modal'
import { Container, Text, Title, WrapperIcon } from './ModalCheckStyled'
import Button from '../../Button/Button'
import Check from '../../Icons/Check'

type ModalCheckProps = {
  open: boolean,
  onClose: () => void,
  title: string,
  text: string,
}

const ModalCheck: React.FC<ModalCheckProps> = ({
  open,
  onClose,
  title,
  text,
}) => (
  <Modal
    onClose={onClose}
    open={open}
  >
    <Container>
      <WrapperIcon>
        <Check />
      </WrapperIcon>
      <Title>
        {title}
      </Title>
      <Text>
        {text}
      </Text>
      <Button
        onClick={onClose}
      >
        Вернуться назад
      </Button>
    </Container>
  </Modal>
)

export default ModalCheck
