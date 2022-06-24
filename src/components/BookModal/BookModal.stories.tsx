import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import BookModal from '.'

export default {
  title: 'BookModal',
  component: BookModal,
} as ComponentMeta<typeof BookModal>

//const Template: ComponentStory<typeof BookModal> = (args) => <BookModal {...args} />

const Template: ComponentStory<typeof BookModal> = () => <BookModal />

export const Default = Template.bind({})
