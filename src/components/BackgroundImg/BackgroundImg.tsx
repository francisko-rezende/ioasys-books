import React from 'react'

import Image from 'next/image'

import * as S from './BackgroundImg.styles'

export type BackgroundImgProps = {
  src: string
}

const BackgroundImg = ({ src }: BackgroundImgProps) => {
  return (
    <S.BackgroundWrapper>
      <Image src={src} layout="fill" objectFit="cover" quality={100} />
    </S.BackgroundWrapper>
  )
}

export default BackgroundImg
