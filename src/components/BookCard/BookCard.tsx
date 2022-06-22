import React from 'react'

import Image from 'next/image'

import * as S from './BookCard.styles'

interface BookCardProps {
  bookTitle: string
  author: string
  pageCount: number
  publisher: string
  published: number
  bookCover?: string
}

const BookCard = ({
  bookTitle = 'Crossing the Chasm',
  author = 'Geoffrey A. Moore',
  pageCount = 150,
  publisher = 'Editora Loyola',
  published = 2020,
  bookCover,
}: BookCardProps) => {
  return (
    <S.Wrapper>
      <Image
        src={bookCover ? bookCover : '/img/book-cover-placeholder.webp'}
        width={81}
        height={122}
      />
      <S.BookInfoWrapper>
        <div>
          <S.BookTitle>{bookTitle}</S.BookTitle>
          <S.Author>{author}</S.Author>
        </div>
        <S.BookDetails>
          <li>{`${pageCount} páginas`}</li>
          <li>{publisher}</li>
          <li>{`Publicado em ${published}`}</li>
        </S.BookDetails>
      </S.BookInfoWrapper>
    </S.Wrapper>
  )
}

export default BookCard
