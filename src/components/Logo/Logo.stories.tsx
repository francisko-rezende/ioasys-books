import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Black = Template.bind({})
Black.args = { color: 'black' }

export const White = Template.bind({})
White.args = { color: 'white' }
