import React, { FunctionComponent } from 'react';
import { TopLineFlexBanner } from 'assets/style/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faTools,
  faSearch,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { WrapNoneFlexDiv, WhiteLink } from 'assets/style/Common';

const NavigationContainer: FunctionComponent<{}> = () => {
  return (
    <>
      <TopLineFlexBanner>
        <WrapNoneFlexDiv style={{ marginLeft: `3%` }}>
          <WhiteLink to="/">
            <FontAwesomeIcon icon={faHome} style={margin5px} />
          </WhiteLink>
          <WhiteLink to="/search">
            <FontAwesomeIcon icon={faSearch} style={margin5px} />
          </WhiteLink>
        </WrapNoneFlexDiv>
        <WrapNoneFlexDiv
          style={{
            marginLeft: `auto`,
            marginRight: `3%`,
          }}
        >
          <WhiteLink to="/req-dev">
            <FontAwesomeIcon icon={faKey} style={margin5px} />
          </WhiteLink>
          <WhiteLink to="/dev">
            <FontAwesomeIcon icon={faTools} color={`red`} style={margin5px} />
          </WhiteLink>
        </WrapNoneFlexDiv>
      </TopLineFlexBanner>
    </>
  );
};

const margin5px = {
  margin: `15px`,
};

export default NavigationContainer;
