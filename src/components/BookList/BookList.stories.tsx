import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import BookList from '.'

export default {
  title: 'BookList',
  component: BookList,
} as ComponentMeta<typeof BookList>

//const Template: ComponentStory<typeof BookList> = (args) => <BookList {...args} />

const Template: ComponentStory<typeof BookList> = () => <BookList />

export const Default = Template.bind({})
