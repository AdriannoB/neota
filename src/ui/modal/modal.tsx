import React, { PropsWithChildren } from 'react'

import { Flex } from '../atomic'

import { ModalContent, ModalBackground } from './modal.styles'

interface ModalProps {
  open: boolean
  title?: string
  wide?: boolean
  submitLabel?: string | JSX.Element
  onSubmit?: any
  closeLabel?: string
  onClose?: any
}

export const Modal = ({
  title,
  open,
  children,
}: PropsWithChildren<ModalProps>): JSX.Element | null => {
  const modalGrid = []

  return open ? (
    <ModalBackground gridAutoRows="min-content" gridTemplateColumns={['1fr', '2fr 4fr 2fr']}>
      <Flex gridColumn={['1 / span 1', '2/ span 1']}>
        <ModalContent>
          <>
            {title && <h3 id="dialog_label">{title}</h3>}
            {children}
          </>
        </ModalContent>
      </Flex>
    </ModalBackground>
  ) : null
}
