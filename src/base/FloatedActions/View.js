import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default ({ data, actions }) => (
    <Button.Group>
        {
            actions ? actions.map(action => (
                <Button icon onClick={() => action.execute(data)}>
                    <Icon name={action.icon} />
                </Button>
            ))

            :

            <div>No Actions</div>
        }
    </Button.Group>
)