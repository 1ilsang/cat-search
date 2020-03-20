import styled from 'styled-components';

const defaultContainerProperty = `
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow: auto;
`;

export const DefaultContainer = styled.div`
  ${defaultContainerProperty}
`;

export const DefaultMarginContainer = styled.div`
  ${defaultContainerProperty}
  margin-left: 10%;
  margin-right: 10%;
`;

export const HorizonCenterContainer = styled.div`
  ${defaultContainerProperty}
  justify-content: center;
`;

export const CenterContainer = styled.div`
  ${defaultContainerProperty}
  justify-content: center;
  align-items: center;
`;
