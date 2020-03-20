import React, { FunctionComponent } from 'react';
import { CenterFlexColumnLayout } from 'assets/style/Layout/FlexLayout';
import AlpacaImg from 'assets/img/alpaca.jpg';

const DevContainer: FunctionComponent<{}> = () => {
  return (
    <CenterFlexColumnLayout>
      <h1>보물은 알파카였어오</h1>
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
    </CenterFlexColumnLayout>
  );
};

export default DevContainer;
