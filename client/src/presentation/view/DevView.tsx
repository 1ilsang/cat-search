import React, { FunctionComponent } from 'react';
import NavigationContainer from 'presentation/container/NavigationContainer';
import DevContainer from 'presentation/container/DevContainer';

const DevView: FunctionComponent<{}> = () => {
  return (
    <>
      <NavigationContainer />
      <DevContainer />
    </>
  );
};

export default DevView;
