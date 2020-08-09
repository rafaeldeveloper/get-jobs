import React from 'react';
import { Card as CardSemantic } from 'semantic-ui-react';
import  Loading from 'base/Loading';

export default ({ item, refetch, data, itemsPerRow = 2 }) => {


    refetch();

    return (

        data ?
            <CardSemantic.Group itemsPerRow={itemsPerRow}>
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

