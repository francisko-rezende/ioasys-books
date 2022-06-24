import styled, { css } from 'styled-components'

type BgProps = {
  isVisible: boolean
}

export const Bg = styled.div<BgProps>`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: hsla(0, 0%, 0%, 0.4);
  position: fixed;
  align-items: center;
  justify-content: center;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
`

export const BookInfoWrapper = styled.div`
  width: 769px;
  height: 608px;
  padding: 48px;
  background: #ffffff;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
`

export const BookTitle = styled.h2`
  font-size: 28px;
`
export const Authors = styled.p`
  font-size: 12px;
  ${({ theme }) => css`
    color: ${theme.colors.magenta};
  `}
`
export const InformationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const InformationSectionTitle = styled.h3`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.thick};
  margin-bottom: 13px;
`

export const InformationList = styled.ul`
  list-style: none;
`

export const InformationListItem = styled.li`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
`

export const InformationListItemData = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`

export const PublisherSummary = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.8;
  quotes: '“' '”';

  &::before {
    content: '“';
    font-size: 42px;
    line-height: 0;
    position: relative;
    top: 22px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`
