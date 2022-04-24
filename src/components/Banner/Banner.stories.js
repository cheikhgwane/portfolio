import React from 'react'
import Banner from './Banner'

export default {
    title: 'Commons/Banner',
    component: Banner,
    argsType: {},
}

const Template = (args) => {
    return <Banner {...args} />
}

export const BannerStory = Template.bind({})
