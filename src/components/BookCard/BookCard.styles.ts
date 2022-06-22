import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 272px;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  gap: 16px;
`
export const BookInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BookTitle = styled.h3`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.thick};
`

export const Author = styled.p`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.colors.magenta};
    font-weight: ${theme.fontWeights.regular};
  `}
`

export const BookDetails = styled.ul`
  list-style: none;

  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.fontWeights.regular};
  `}
`
