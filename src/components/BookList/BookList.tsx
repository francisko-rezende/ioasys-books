import React from 'react'

import { AxiosResponse } from 'axios'
import BookCard from 'components/BookCard'
import api from 'services/api'

import * as S from './BookList.styles'

export interface Book {
  id: string
  title: string
  description: string
  authors?: string[]
  pageCount: number
  category: string
  imageUrl: string
  isbn10: string
  isbn13: string
  language: string
  publisher: string
  published: number
}

const BookList = () => {
  const [page, setPage] = React.useState<number>(1)
  const [totalPages, setTotalPages] = React.useState<number>()
  const [booksData, setBooksData] = React.useState<AxiosResponse>() // Me parece que essa tipagem tá meio porca kkkkk alguma sugestão? Pensei em usar o modelo abaixo, tá na lista de coisas que eu quero testar depois

  // const test = {
  //   data: [
  //     {
  //       id: '8f41b92c7460b9337660427e',
  //       title: 'A Culpa é das Estrelas',
  //       description:
  //         'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
  //       authors: ['Jonh Green'],
  //       pageCount: 288,
  //       category: 'Romance',
  //       imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
  //       isbn10: '0062856626',
  //       isbn13: '978-0062856623',
  //       language: 'Inglês',
  //       publisher: 'Intrínseca',
  //       published: 2002,
  //     },
  //   ],
  //   page: 1,
  //   totalPages: 34,
  //   totalItems: 674,
  // }

  console.log(booksData)

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get(`/books?page=${page}&amount=12`)
      setBooksData(data)
      setTotalPages(Math.floor(data.totalPages))
    }
    fetchData()
  }, [page])
  return (
    <>
      <S.BookList>
        {booksData?.data.length &&
          booksData?.data.map((book: Book) => {
            return <BookCard book={book} key={book.id} />
          })}
      </S.BookList>
      {totalPages && (
        <span style={{ textAlign: 'right' }}>
          Página {page} de {totalPages}
          <button onClick={() => setPage((page) => --page)}>
            Página anterior
          </button>
          <button onClick={() => setPage((page) => ++page)}>
            Próxima página
          </button>
        </span>
      )}
    </>
  )
}

export default BookList
