import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import LoginButton from '.'

describe('<LoginButton />', () => {
  test('that LoginButton renders properly', () => {
    renderWithTheme(<LoginButton />)
    expect(screen.getByRole('button', { name: 'Entrar' })).toHaveStyle({
      background: '#fff',
      color: '#AB2680',
    })
  })
})
