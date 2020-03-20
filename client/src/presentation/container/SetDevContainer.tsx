import React, { FunctionComponent, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SetDevViewContainer: FunctionComponent<{}> = () => {
  const [isDev, setIsDev] = useState<boolean | null>();

  useEffect(() => {
    const curDev = window.sessionStorage.getItem(`isDev`) === `true`;
    setIsDev(curDev);
  }, []);

  const toggleDevSessionHandler = () => {
    setIsDev(dev => {
      const nextDev = !dev;
      window.sessionStorage.setItem(`isDev`, `${nextDev}`);
      return nextDev;
    });
  };

  return (
    <Layout>
      <h1>You can{isDev ? `` : `'t`} access Dev Path!</h1>
      <h2>
        Click <FontAwesomeIcon icon={faTools} color={`red`} /> !
      </h2>
      <button onClick={toggleDevSessionHandler}>Toggle Dev Session</button>
    </Layout>
  );
};

const Layout = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

export default SetDevViewContainer;
