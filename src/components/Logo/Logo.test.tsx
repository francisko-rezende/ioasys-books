import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  test('That a white logo renders by default', () => {
    renderWithTheme(<Logo />)
    const logo = screen.getByText('Books')
    expect(logo).toHaveStyle({ color: 'rgb(255, 255, 255)' })
  })

  test('That the black logo renders properly', () => {
    renderWithTheme(<Logo color="black" />)
    const logo = screen.getByText('Books')
    expect(logo).toHaveStyle({ color: 'rgb(51, 51, 51)' })
  })
})
