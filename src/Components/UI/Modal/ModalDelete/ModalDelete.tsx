import React from 'react'
import Modal from '../ModalDefault/Modal'
import { Container, Text, Title, WrapperButtons, WrapperIcon } from './ModalDeleteStyled'
import TrashBin from '../../Icons/TrashBin'
import Button from '../../Button/Button'
import { User } from '../../../../Utils/Types'

type ModalDeleteProps = {
  open: boolean,
  onClose: () => void,
  deleted: () => void,
  title: string,
  text: string,
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  open,
  onClose,
  deleted,
  title,
  text,
}) => (
  <Modal
    onClose={onClose}
    open={open}
  >
    <Container>
      <WrapperIcon>
        <TrashBin />
      </WrapperIcon>
      <Title>
        {title}
      </Title>
      <Text>
        {text}
      </Text>
      <WrapperButtons>
        <Button
          onClick={onClose}
          isCancel
        >
          Отменить
        </Button>
        <Button
          onClick={deleted}
        >
          Удалить
        </Button>
      </WrapperButtons>
    </Container>
  </Modal>
)

export default ModalDelete
