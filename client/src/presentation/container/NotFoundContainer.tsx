import React, { FunctionComponent } from 'react';
import { DefaultLayout } from 'assets/style/Layout/Layout';
import cat404Jpg from 'assets/img/cat404.jpg';

const NotFoundContainer: FunctionComponent<{}> = () => {
  return (
    <>
      <DefaultLayout>
        <img
          src={cat404Jpg}
          width={`100%`}
          alt={`Cat on the page that is not found`}
        />
      </DefaultLayout>
    </>
  );
};

export default NotFoundContainer;
