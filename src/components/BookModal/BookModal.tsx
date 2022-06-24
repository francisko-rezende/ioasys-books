import React from 'react'

import Image from 'next/image'
import api from 'services/api'

import * as S from './BookModal.styles'

type BookData = {
  id: string
  title: string
  description: string
  authors: string[]
  pageCount: number
  category: string
  imageUrl: string
  isbn10: string
  isbn13: string
  language: string
  publisher: string
  published: number
}

type BookModalProps = {
  id: string
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}
const BookModal = ({ id, isVisible, setIsVisible }: BookModalProps) => {
  const [bookData, setBookData] = React.useState<null | BookData>(null)
  React.useEffect(() => {
    const fetchData = async (id: string) => {
      const { data } = await api.get(`/books/${id}`)
      setBookData(data)
    }
    fetchData(id)
  }, [id])

  return bookData ? (
    <S.Bg onClick={() => setIsVisible(false)} isVisible={isVisible}>
      <S.CloseButton onClick={() => setIsVisible(false)}>Close</S.CloseButton>
      <S.BookInfoWrapper>
        <Image
          src={
            bookData?.imageUrl
              ? bookData?.imageUrl
              : '/public/img/book-cover-placeholder.webp'
          }
          width={349}
          height={512}
          placeholder={'blur'}
          blurDataURL="/img/book-cover-placeholder.webp"
        />
        <S.InformationSection>
          <section>
            <S.BookTitle>{bookData?.title}</S.BookTitle>
            <S.Authors>
              {bookData?.authors.reduce(
                (acc, author, i) =>
                  i === 0 ? `${author}` : acc + `, ${author}`,
                ''
              )}
            </S.Authors>
          </section>
          <section>
            <S.InformationSectionTitle>Informações</S.InformationSectionTitle>
            <S.InformationList>
              <S.InformationListItem>
                Páginas{' '}
                <S.InformationListItemData>
                  {bookData?.pageCount} Páginas
                </S.InformationListItemData>
              </S.InformationListItem>
              <S.InformationListItem>
                Editora{' '}
                <S.InformationListItemData>
                  {bookData?.publisher}
                </S.InformationListItemData>
              </S.InformationListItem>
              <S.InformationListItem>
                Publicação{' '}
                <S.InformationListItemData>
                  {bookData?.published}
                </S.InformationListItemData>
              </S.InformationListItem>
              <S.InformationListItem>
                Idioma{' '}
                <S.InformationListItemData>
                  {bookData?.language}
                </S.InformationListItemData>
              </S.InformationListItem>
              {/* <S.InformationListItem>
                  Título original{' '}
                  <S.InformationListItemData>
                    {bookData.}
                  </S.InformationListItemData>
                </S.InformationListItem> */}
              <S.InformationListItem>
                ISBN-10{' '}
                <S.InformationListItemData>
                  {bookData?.isbn10}
                </S.InformationListItemData>
              </S.InformationListItem>
              <S.InformationListItem>
                ISBN-13{' '}
                <S.InformationListItemData>
                  {bookData?.isbn13}
                </S.InformationListItemData>
              </S.InformationListItem>
            </S.InformationList>
          </section>
          <section>
            <S.InformationSectionTitle>
              Resenha da Editora
            </S.InformationSectionTitle>
            <S.PublisherSummary>{bookData?.description}</S.PublisherSummary>
          </section>
        </S.InformationSection>
      </S.BookInfoWrapper>
    </S.Bg>
  ) : (
    <h1>Loading...</h1>
  )
}

export default BookModal
