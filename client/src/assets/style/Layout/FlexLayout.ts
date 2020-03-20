import styled from 'styled-components';

const defaultFlexLayoutProperty = `
	display: flex;
  flex: 1;
`;

export const DefaultFlexLayout = styled.div`
  ${defaultFlexLayoutProperty}
`;

export const DefaultFlexColumnLayout = styled.div`
  ${defaultFlexLayoutProperty}
  flex-direction: column;
`;

export const CenterFlexLayout = styled.div`
  ${defaultFlexLayoutProperty}
  justify-content: center;
  align-items: center;
`;

export const CenterFlexColumnLayout = styled(DefaultFlexColumnLayout)`
  justify-content: center;
  align-items: center;
`;
