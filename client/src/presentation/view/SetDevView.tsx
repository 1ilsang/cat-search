import React, { FunctionComponent } from 'react';
import NavigationContainer from 'presentation/container/NavigationContainer';
import SetDevContainer from 'presentation/container/SetDevContainer';
import FooterContainer from 'presentation/container/FooterContainer';
import { DefaultFlexLayout } from 'assets/style/FlexLayout';

const SetDevView: FunctionComponent<{}> = () => {
  return (
    <>
      <NavigationContainer />
      <DefaultFlexLayout>
        <SetDevContainer />
        <FooterContainer />
      </DefaultFlexLayout>
    </>
  );
};

export default SetDevView;
