import React, { ReactNode } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'
import { BoxIcon, WrapperModal } from './ModalStyled'
import Cross from '../../Icons/Cross'
import { Color } from '../../../../Utils/Constans'

type ModalProps = {
  open: boolean,
  onClose: () => void,
  children: ReactNode,
  width?: string,
  customCss?: FlattenSimpleInterpolation,
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  width = 'fit-content',
  customCss,
}) => (
  <WrapperModal
    open={open}
    onCancel={onClose}
    centered
    width={width}
    closable
    footer={null}
    closeIcon={null}
    css={customCss}
  >
    <BoxIcon
      onClick={onClose}
    >
      <Cross
        color={Color.black}
      />
    </BoxIcon>
    {children}
  </WrapperModal>
)

export default Modal
