import React, { FunctionComponent } from 'react';
import NavigationContainer from 'presentation/container/NavigationContainer';
import SetDevContainer from 'presentation/container/SetDevContainer';
import FooterContainer from 'presentation/container/FooterContainer';
import { DefaultFlexColumnLayout } from 'assets/style/Layout/FlexLayout';

const SetDevView: FunctionComponent<{}> = () => {
  return (
    <>
      <NavigationContainer />
      <DefaultFlexColumnLayout>
        <SetDevContainer />
        <FooterContainer />
      </DefaultFlexColumnLayout>
    </>
  );
};

export default SetDevView;
