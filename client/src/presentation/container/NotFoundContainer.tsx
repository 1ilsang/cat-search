import React, { FunctionComponent } from 'react';
import { DefaultContainer } from 'assets/style/Container';
import cat404Jpg from 'assets/img/cat404.jpg';

const NotFoundContainer: FunctionComponent<{}> = () => {
  return (
    <>
      <DefaultContainer>
        <img
          src={cat404Jpg}
          width={`100%`}
          alt={`Cat on the page that is not found`}
        />
      </DefaultContainer>
    </>
  );
};

export default NotFoundContainer;
