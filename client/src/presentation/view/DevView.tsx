import React, { FunctionComponent } from 'react';
import NavigationContainer from 'presentation/container/NavigationContainer';
import DevContainer from 'presentation/container/DevContainer';
import FooterContainer from 'presentation/container/FooterContainer';
import { DefaultFlexLayout } from 'assets/style/FlexLayout';

const DevView: FunctionComponent<{}> = () => {
  return (
    <>
      <NavigationContainer />
      <DefaultFlexLayout>
        <DevContainer />
        <FooterContainer />
      </DefaultFlexLayout>
    </>
  );
};

export default DevView;
