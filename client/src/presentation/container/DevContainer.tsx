import React, { FunctionComponent } from 'react';
import AlpacaImg from 'assets/img/alpaca.jpg';
import styled from 'styled-components';

const DevContainer: FunctionComponent<{}> = () => {
  return (
    <FlexLayout>
      <h1>보물은 알파카였어오</h1>
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
      <img src={AlpacaImg} alt={`Ugly alpaca`} />
    </FlexLayout>
  );
};

const FlexLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
`;

export default DevContainer;
