import React, { FunctionComponent } from 'react';
import { CenterContainer } from 'assets/style/Container';
import AlpacaImg from 'assets/img/alpaca.jpg';

const DevContainer: FunctionComponent<{}> = () => {
  return (
    <CenterContainer>
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
    </CenterContainer>
  );
};

export default DevContainer;
