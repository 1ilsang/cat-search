import React, { FunctionComponent } from 'react';
import { SkyBlueLink } from 'assets/style/Common';

const HomeContainer: FunctionComponent<{}> = () => {
  return (
    <SkyBlueLink to="/search">
      <h1>GO TO CAT SEARCH</h1>
    </SkyBlueLink>
  );
};

export default HomeContainer;
