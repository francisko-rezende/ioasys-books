import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import LoginForm from '.'

export default {
  title: 'LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

//const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />

export const Default = Template.bind({})
