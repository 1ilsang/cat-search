import React, { FunctionComponent } from 'react';
import NavigationContainer from 'presentation/container/NavigationContainer';
import DevContainer from 'presentation/container/DevContainer';
import FooterContainer from 'presentation/container/FooterContainer';
import { DefaultFlexColumnLayout } from 'assets/style/Layout/FlexLayout';

const DevView: FunctionComponent<{}> = () => {
  return (
    <>
      <NavigationContainer />
      <DefaultFlexColumnLayout>
        <DevContainer />
        <FooterContainer />
      </DefaultFlexColumnLayout>
    </>
  );
};

export default DevView;
