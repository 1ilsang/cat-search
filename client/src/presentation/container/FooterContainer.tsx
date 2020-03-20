import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const FooterContainer: FunctionComponent<{}> = () => {
  return (
    <>
      <Layout>
        <h1>Hello, World!</h1>
        <h1>Hello, World!</h1>
        <h1>Hello, World!</h1>
        <h1>Hello, World!</h1>
        <h1>Hello, World!</h1>
        <h1>Hello, World!</h1>
        <h1>Hello, World!</h1>
        <h1>Hello, World!</h1>
        <h1>Hello, World!</h1>
        <h1>Hello, World!</h1>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  margin-top: auto;
  width: 100%;
  background-color: #20232a;
  color: #ffffff;
`;

export default FooterContainer;
