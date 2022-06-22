import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import BookCard from '.'

export default {
  title: 'BookCard',
  component: BookCard,
} as ComponentMeta<typeof BookCard>

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args} />
)

// const Template: ComponentStory<typeof BookCard> = () => <BookCard />

export const Default = Template.bind({})
