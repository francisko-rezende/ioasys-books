import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import LoginInput from '.'

export default {
  title: 'LoginInput',
  component: LoginInput,
} as ComponentMeta<typeof LoginInput>

const Template: ComponentStory<typeof LoginInput> = (args) => (
  <LoginInput {...args} />
)

// const Template: ComponentStory<typeof LoginInput> = () => <LoginInput />

export const Email = Template.bind({})
Email.args = {
  inputName: 'Email',
  hasButton: false,
}

export const Password = Template.bind({})
Password.args = {
  inputName: 'Senha',
  hasButton: true,
}
