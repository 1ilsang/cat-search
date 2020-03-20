import React, { FunctionComponent } from 'react';
import HomeContainer from 'presentation/container/HomeContainer';
import { CenterFlexLayout } from 'assets/style/Layout/FlexLayout';

const HomeView: FunctionComponent<{}> = () => {
  return (
    <CenterFlexLayout style={{ height: `100%` }}>
      <HomeContainer />
    </CenterFlexLayout>
  );
};

export default HomeView;
