import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import LoginForm from '.'

describe('<LoginForm />', () => {
  test('should render the form', () => {
    renderWithTheme(<LoginForm />)

    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })
})
