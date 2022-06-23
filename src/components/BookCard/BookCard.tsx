import React from 'react'

import { Book } from 'components/BookList/BookList'
import Image from 'next/image'

import * as S from './BookCard.styles'

type BookCardProps = {
  book: Book
}

const BookCard = ({ book }: BookCardProps) => {
  const { authors, title, pageCount, published, publisher, imageUrl } = book

  const renderAuthors = (authors: string[]) =>
    authors.length <= 2 ? (
      authors.map((author) => <S.Author key={author}>{author}</S.Author>)
    ) : (
      <S.Author>
        {authors[0]} <em>et al</em>
      </S.Author>
    )

  return (
    <S.Wrapper>
      <Image
        src={imageUrl ? imageUrl : '/img/book-cover-placeholder.webp'}
        width={81}
        height={122}
      />
      <S.BookInfoWrapper>
        <div>
          <S.BookTitle>{title}</S.BookTitle>
          {authors ? (
            renderAuthors(authors)
          ) : (
            <S.Author>Autor desconhecido</S.Author>
          )}
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
