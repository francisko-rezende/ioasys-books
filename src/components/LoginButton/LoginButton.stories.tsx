import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import LoginButton from '.'

export default {
  title: 'LoginButton',
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>

//const Template: ComponentStory<typeof LoginButton> = (args) => <LoginButton {...args} />

const Template: ComponentStory<typeof LoginButton> = () => <LoginButton />

export const Default = Template.bind({})
