import React, { FC, MouseEventHandler, ReactNode } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'
import { ButtonStyled } from './ButtonStyled';

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  css?: FlattenSimpleInterpolation,
  children: ReactNode,
  disabled?: boolean,
  isCancel?: boolean,
};

const Button: FC<ButtonProps> = ({
  onClick,
  css,
  children,
  disabled = false,
  isCancel = false,
}) => (
  <ButtonStyled
    onClick={onClick}
    css={css}
    disabled={disabled}
    isCancel={isCancel}
  >
    {children}
  </ButtonStyled>
)

export default Button
