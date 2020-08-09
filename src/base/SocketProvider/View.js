import React from 'react';
import useContainer from './Container';
import { ApolloProvider } from '@apollo/react-hooks';


export default props => {
    const { children } = props || {};
    const client = useContainer(props);


    if (!children) {
        return null;
    }


    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}