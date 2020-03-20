import React, { FunctionComponent } from 'react';
import NavigationContainer from 'presentation/container/NavigationContainer';
import NotFoundContainer from 'presentation/container/NotFoundContainer';

const NotFoundView: FunctionComponent<{}> = () => {
  return (
    <>
      <NavigationContainer />
      <NotFoundContainer />
    </>
  );
};

export default NotFoundView;
