import React from 'react'

import Buttons from 'components/Buttons'
import Link from 'next/link'

interface childrenTestProps {
  children: React.ReactNode
  // children: React.ReactElement
}

const ChildrenTest = ({ children }: childrenTestProps) => {
  return <div>{children}</div>
}

const index = () => {
  // const mockData = [
  //   {
  //     id: 1,
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   },
  //   {
  //     id: 2,
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 2,
  //   },
  //   {
  //     id: 3,
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 3,
  //   },
  //   {
  //     id: 4,
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 4,
  //   },
  //   {
  //     id: 5,
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 5,
  //   },
  // ]
  console.log(
    <Buttons disabled={false} size={'large'} buttonType="secondary">
      Wololo
    </Buttons>
  )

  return (
    <>
      <h1>Ioasys Books</h1>

      <Link href="/home">
        <a>Home</a>
      </Link>
      {/* {mockData.map((item) => (
        <ChildrenTest key={item.id}>
          <div>{item.title}</div>
        </ChildrenTest>
      ))} */}
      <ChildrenTest>
        <div>Alo alo</div>
        <div>Graças a deus</div>
      </ChildrenTest>
    </>
  )
}

export default index
