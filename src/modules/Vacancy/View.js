import React from 'react';
import * as Modules from './';
import SocketProvider from 'base/SocketProvider';
import NestedRouter from 'base/NestedRouter';

export default () => {
  return (
    <SocketProvider>
      <NestedRouter
        Modules={Modules}
        defaultModule={`/vacancy`}
      />
    </SocketProvider>
  );
};