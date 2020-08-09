import React from 'react';
import useContainer from './Container';

export default (props) => {

    const { adaptedProps } = useContainer(props);
    const { children } = props;


    return (

        adaptedProps &&
            <React.Fragment>
                {
                    React.cloneElement(children, adaptedProps)

                }
            </React.Fragment>


    )


}

