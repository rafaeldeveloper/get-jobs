import React from 'react';
import { Card as CardSemantic } from 'semantic-ui-react';
import  Loading from 'base/Loading';

export default ({ item, refetch, data, ...extraProps }) => {


    refetch();

    return (

        data ?
            <CardSemantic.Group {...extraProps}>
                {
                    data?.map(dataProps => {

                        const adatapetedProps = { ...dataProps }

                        return item(adatapetedProps)

                    }
                    )
                }
            </CardSemantic.Group>
            :

            <Loading />

    )


}

