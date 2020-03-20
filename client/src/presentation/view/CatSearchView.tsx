import React, { FunctionComponent } from 'react';
import NavigationContainer from 'presentation/container/NavigationContainer';
import CatSearchContainer from 'presentation/container/CatSearchContainer';
import FooterContainer from 'presentation/container/FooterContainer';
import { DefaultFlexColumnLayout } from 'assets/style/Layout/FlexLayout';

const CatSearchView: FunctionComponent<{}> = () => {
  return (
    <>
      <NavigationContainer />
      <DefaultFlexColumnLayout>
        <CatSearchContainer />
        <FooterContainer />
      </DefaultFlexColumnLayout>
    </>
  );
};

export default CatSearchView;
