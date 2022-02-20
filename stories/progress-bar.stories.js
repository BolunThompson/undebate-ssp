import React from 'react'
import ProgressBar from '../app/components/progress-bar'

export default {
    title: 'Progress Bar',
    component: ProgressBar,
    argTypes: {},
}

const Template = args => <ProgressBar style={{ width: '10rem' }} {...args} />

export const Default = Template.bind({})
Default.args = { percentDone: 70 }
