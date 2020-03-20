import styled from 'styled-components';

const defaultLayoutProperty = `
  width: 100%;
  height: 100%;
`;

export const DefaultLayout = styled.div`
  ${defaultLayoutProperty}
`;

export const DefaultMarginLayout = styled.div`
  ${defaultLayoutProperty}
  margin-left: 10%;
  margin-right: 10%;
`;

export const FooterLayout = styled.div`
  bottom: 0;
  width: 100%;
  margin-top: 3%;
  background-color: #20232a;
  color: #ffffff;
`;
