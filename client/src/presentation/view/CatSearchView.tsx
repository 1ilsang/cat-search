import React, { FunctionComponent } from 'react';
import NavigationContainer from 'presentation/container/NavigationContainer';
import CatSearchContainer from 'presentation/container/CatSearchContainer';

const CatSearchView: FunctionComponent<{}> = () => {
  return (
    <>
      <NavigationContainer />
      <CatSearchContainer />
    </>
  );
};

export default CatSearchView;
