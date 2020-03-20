import React, { FunctionComponent } from 'react';
import HomeContainer from 'presentation/container/HomeContainer';
import styled from 'styled-components';

const HomeView: FunctionComponent<{}> = () => {
  return (
    <HomeFlexLayout>
      <HomeContainer />
    </HomeFlexLayout>
  );
};

const HomeFlexLayout = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default HomeView;
