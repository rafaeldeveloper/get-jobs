import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default ({ action, logo }) => (
    <Menu stackable>
        <Menu.Item>
            <img src={logo} alt="logo" />
        </Menu.Item>
        <Menu.Item
            onClick={() => window.location.replace("list")}
            name='vacancies'
        >
            Vacancies
        </Menu.Item>

        {
            action &&
            <Menu.Item
                position='right'
                name='add'
                onClick={() => action.execute(true)}
            >
                <Icon name={action.icon} />
                {action.name}
            </Menu.Item>
        }
    </Menu>
)
