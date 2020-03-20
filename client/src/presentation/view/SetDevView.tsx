import React, { FunctionComponent } from 'react';
import NavigationContainer from 'presentation/container/NavigationContainer';
import SetDevContainer from 'presentation/container/SetDevContainer';

const SetDevView: FunctionComponent<{}> = () => {
  return (
    <>
      <NavigationContainer />
      <SetDevContainer />
    </>
  );
};

export default SetDevView;
