import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

export default ({ title = 'Loading', size }) => (
    <Dimmer active>
        <Loader size={size || 'medium'}>{ title }</Loader>
    </Dimmer>
)
