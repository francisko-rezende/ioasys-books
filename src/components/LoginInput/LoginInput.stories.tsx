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

export const Default = Template.bind({})
