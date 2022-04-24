import React from 'react'
import HomeView from '.'

export default {
    title: 'Views/Index',
    component: <HomeView></HomeView>,
    args: {},
}

const Template = (args) => <HomeView {...args}></HomeView>

export const HomeViewStory = Template.bind({})
