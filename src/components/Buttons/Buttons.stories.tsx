import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Buttons from '.'

export default {
  title: 'Level 1/Level 2/Level 3/Buttons',
  component: Buttons,
} as ComponentMeta<typeof Buttons>

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args} />

// secondary

export const SecondaryTiny = Template.bind({})
SecondaryTiny.args = {
  children: 'Secondary',
  buttonType: 'secondary',
  size: 'tiny',
}

export const SecondaryTinyDisabled = Template.bind({})
SecondaryTinyDisabled.args = {
  children: 'Secondary',
  buttonType: 'secondary',
  size: 'tiny',
  disabled: true,
}

export const SecondarySmall = Template.bind({})
SecondarySmall.args = {
  children: 'Secondary',
  buttonType: 'secondary',
  size: 'small',
}

export const SecondarySmallDisabled = Template.bind({})
SecondarySmallDisabled.args = {
  children: 'Secondary',
  buttonType: 'secondary',
  size: 'small',
  disabled: true,
}

export const SecondaryBasic = Template.bind({})
SecondaryBasic.args = {
  children: 'Secondary',
  buttonType: 'secondary',
  size: 'basic',
}

export const SecondaryBasicDisabled = Template.bind({})
SecondaryBasicDisabled.args = {
  children: 'Secondary',
  buttonType: 'secondary',
  size: 'basic',
  disabled: true,
}

export const SecondaryLarge = Template.bind({})
SecondaryLarge.args = {
  children: 'Secondary',
  buttonType: 'secondary',
  size: 'large',
}

export const SecondaryLargeDisabled = Template.bind({})
SecondaryLargeDisabled.args = {
  children: 'Secondary',
  buttonType: 'secondary',
  size: 'large',
  disabled: true,
}

// success

export const SuccessTiny = Template.bind({})
SuccessTiny.args = {
  children: 'Success',
  buttonType: 'success',
  size: 'tiny',
}

export const SuccessTinyDisabled = Template.bind({})
SuccessTinyDisabled.args = {
  children: 'Success',
  buttonType: 'success',
  size: 'tiny',
  disabled: true,
}

export const SuccessSmall = Template.bind({})
SuccessSmall.args = {
  children: 'Success',
  buttonType: 'success',
  size: 'small',
}

export const SuccessSmallDisabled = Template.bind({})
SuccessSmallDisabled.args = {
  children: 'Success',
  buttonType: 'success',
  size: 'small',
  disabled: true,
}

export const SuccessBasic = Template.bind({})
SuccessBasic.args = {
  children: 'Success',
  buttonType: 'success',
  size: 'basic',
}

export const SuccessBasicDisabled = Template.bind({})
SuccessBasicDisabled.args = {
  children: 'Success',
  buttonType: 'success',
  size: 'basic',
  disabled: true,
}

export const SuccessLarge = Template.bind({})
SuccessLarge.args = {
  children: 'Success',
  buttonType: 'success',
  size: 'large',
}

export const SuccessLargeDisabled = Template.bind({})
SuccessLargeDisabled.args = {
  children: 'Success',
  buttonType: 'success',
  size: 'large',
  disabled: true,
}

// warning

export const WarningTiny = Template.bind({})
WarningTiny.args = {
  children: 'Warning',
  buttonType: 'warning',
  size: 'tiny',
}

export const WarningTinyDisabled = Template.bind({})
WarningTinyDisabled.args = {
  children: 'Warning',
  buttonType: 'warning',
  size: 'tiny',
  disabled: true,
}

export const WarningSmall = Template.bind({})
WarningSmall.args = {
  children: 'Warning',
  buttonType: 'warning',
  size: 'small',
}

export const WarningSmallDisabled = Template.bind({})
WarningSmallDisabled.args = {
  children: 'Warning',
  buttonType: 'warning',
  size: 'small',
  disabled: true,
}

export const WarningBasic = Template.bind({})
WarningBasic.args = {
  children: 'Warning',
  buttonType: 'warning',
  size: 'basic',
}

export const WarningBasicDisabled = Template.bind({})
WarningBasicDisabled.args = {
  children: 'Warning',
  buttonType: 'warning',
  size: 'basic',
  disabled: true,
}

export const WarningLarge = Template.bind({})
WarningLarge.args = {
  children: 'Warning',
  buttonType: 'warning',
  size: 'large',
}

export const WarningLargeDisabled = Template.bind({})
WarningLargeDisabled.args = {
  children: 'Warning',
  buttonType: 'warning',
  size: 'large',
  disabled: true,
}

// alert

export const AlertTiny = Template.bind({})
AlertTiny.args = {
  children: 'Alert',
  buttonType: 'alert',
  size: 'tiny',
}

export const AlertTinyDisabled = Template.bind({})
AlertTinyDisabled.args = {
  children: 'Alert',
  buttonType: 'alert',
  size: 'tiny',
  disabled: true,
}

export const AlertSmall = Template.bind({})
AlertSmall.args = {
  children: 'Alert',
  buttonType: 'alert',
  size: 'small',
}

export const AlertSmallDisabled = Template.bind({})
AlertSmallDisabled.args = {
  children: 'Alert',
  buttonType: 'alert',
  size: 'small',
  disabled: true,
}

export const AlertBasic = Template.bind({})
AlertBasic.args = {
  children: 'Alert',
  buttonType: 'alert',
  size: 'basic',
}

export const AlertBasicDisabled = Template.bind({})
AlertBasicDisabled.args = {
  children: 'Alert',
  buttonType: 'alert',
  size: 'basic',
  disabled: true,
}

export const AlertLarge = Template.bind({})
AlertLarge.args = {
  children: 'Alert',
  buttonType: 'alert',
  size: 'large',
}

export const AlertLargeDisabled = Template.bind({})
AlertLargeDisabled.args = {
  children: 'Alert',
  buttonType: 'alert',
  size: 'large',
  disabled: true,
}

// primary

export const PrimaryTiny = Template.bind({})
PrimaryTiny.args = {
  children: 'Primary',
  buttonType: 'primary',
  size: 'tiny',
}

export const PrimaryTinyDisabled = Template.bind({})
PrimaryTinyDisabled.args = {
  children: 'Primary',
  buttonType: 'primary',
  size: 'tiny',
  disabled: true,
}

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
  children: 'Primary',
  buttonType: 'primary',
  size: 'small',
}

export const PrimarySmallDisabled = Template.bind({})
PrimarySmallDisabled.args = {
  children: 'Primary',
  buttonType: 'primary',
  size: 'small',
  disabled: true,
}

export const PrimaryBasic = Template.bind({})
PrimaryBasic.args = {
  children: 'Primary',
  buttonType: 'primary',
  size: 'basic',
}

export const PrimaryBasicDisabled = Template.bind({})
PrimaryBasicDisabled.args = {
  children: 'Primary',
  buttonType: 'primary',
  size: 'basic',
  disabled: true,
}

export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = {
  children: 'Primary',
  buttonType: 'primary',
  size: 'large',
}

export const PrimaryLargeDisabled = Template.bind({})
PrimaryLargeDisabled.args = {
  children: 'Primary',
  buttonType: 'primary',
  size: 'large',
  disabled: true,
}
