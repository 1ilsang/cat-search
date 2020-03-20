import React, { FunctionComponent } from 'react';
import { SkyBlueLink } from 'assets/style/Common';
import { CenterContainer } from 'assets/style/Container';

const HomeContainer: FunctionComponent<{}> = () => {
  return (
    <CenterContainer>
      <SkyBlueLink to="/search">
        <h1>GO TO CAT SEARCH</h1>
      </SkyBlueLink>
    </CenterContainer>
  );
};

export default HomeContainer;
