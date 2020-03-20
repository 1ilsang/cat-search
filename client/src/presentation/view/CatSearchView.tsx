import React, { FunctionComponent } from 'react';
import NavigationContainer from 'presentation/container/NavigationContainer';
import CatSearchContainer from 'presentation/container/CatSearchContainer';
import FooterContainer from 'presentation/container/FooterContainer';
import { DefaultFlexLayout } from 'assets/style/FlexLayout';

const CatSearchView: FunctionComponent<{}> = () => {
  return (
    <>
      <NavigationContainer />
      <DefaultFlexLayout>
        <CatSearchContainer />
        <FooterContainer />
      </DefaultFlexLayout>
    </>
  );
};

export default CatSearchView;
