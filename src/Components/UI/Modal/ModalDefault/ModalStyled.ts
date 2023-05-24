import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { Modal as AntModal } from 'antd'
import { remCalc } from '../../../../Utils/RemCalc'

type WrapperModalProps = {
  css?: FlattenSimpleInterpolation | undefined,
}

export const WrapperModal = styled(AntModal)<WrapperModalProps>`
  position: relative;

  .ant-modal-content {
    padding: ${remCalc(40)} ${remCalc(50)};
    border-radius: ${remCalc(14)};
    max-height: 80vh;
  }

  .ant-modal-close-x {
    display: none;
  }

  .ant-modal-close {
    display: none;
  }

  ${({ css }) => css};
`

export const BoxIcon = styled.div`
  position: absolute;
  top: ${remCalc(24)};
  right: ${remCalc(24)};
  transition: transform 0.3s ease;
  transform-origin: center;

  &:hover {
    cursor: pointer;
  }

  &:hover svg {
    transform: rotate(90deg);
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  svg {
    transition: transform 0.3s ease;
    transform: rotate(0deg);
  }
`
