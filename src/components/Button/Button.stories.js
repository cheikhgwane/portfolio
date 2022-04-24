import React from 'react'
import Button from './index'

export default {
    title: 'Commons/Button',
    component: Button,
    args: {},
}

const Template = (args) => <Button label="Test theme" {...args} />

export const ButtonStory = Template.bind({})
