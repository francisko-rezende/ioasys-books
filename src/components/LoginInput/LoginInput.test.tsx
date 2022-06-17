import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import LoginInput from '.'

describe('<LoginInput />', () => {
  test('that the password input renders by default', () => {
    renderWithTheme(<LoginInput />)
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })

  test('that the email input renders properly', () => {
    renderWithTheme(<LoginInput inputName="Email" />)
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
  })
})
