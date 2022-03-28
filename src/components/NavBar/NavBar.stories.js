import React from 'react'
import NavBar from './NavBar'

export default {
    title: 'Commons/Menu',
    component: NavBar,
    argTypes: {},
}

const Template = (args) => {
    return <NavBar {...args} />
}

export const NavBarStory = Template.bind({})
