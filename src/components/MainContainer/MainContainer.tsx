import React from 'react'

import * as S from './MainContainer.styles'

export type MainContainerProps = {
  children: React.ReactNode
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <S.Container>{children}</S.Container>
}

export default MainContainer
