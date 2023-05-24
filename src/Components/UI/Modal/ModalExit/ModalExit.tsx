import React from 'react'
import Modal from '../ModalDefault/Modal'
import { Container, Title, WrapperButtons } from './ModalExitStyled'
import Button from '../../Button/Button'

type ModalExitProps = {
  open: boolean,
  onClose: () => void,
  exit: () => void,
  title: string,
}

const ModalExit: React.FC<ModalExitProps> = ({
  open,
  onClose,
  exit,
  title,
}) => (
  <Modal
    onClose={onClose}
    open={open}
  >
    <Container>
      <Title>
        {title}
      </Title>
      <WrapperButtons>
        <Button
          onClick={onClose}
        >
          Отмена
        </Button>
        <Button
          onClick={exit}
        >
          Выйти
        </Button>
      </WrapperButtons>
    </Container>

  </Modal>
)

export default ModalExit
