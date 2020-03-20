import styled from 'styled-components';
import { IWrapDiv } from 'store/_types/style/Common';
import { Link } from 'react-router-dom';

export const WrapNoneFlexDiv = styled.div<IWrapDiv>`
  width: ${props => (props.style && props.style.width) || 'auto'};
  height: ${props => (props.style && props.style.height) || 'auto'};
  flex: none;
`;

export const NoneStyleLink = styled(Link)`
  text-decoration: none;
`;

export const WhiteLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

export const SkyBlueLink = styled(Link)`
  color: skyblue;
  text-decoration: none;
`;
