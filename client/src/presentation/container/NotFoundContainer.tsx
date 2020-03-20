import React, { FunctionComponent } from 'react';
import cat404Jpg from 'assets/img/cat404.jpg';

const NotFoundContainer: FunctionComponent<{}> = () => {
  return (
    <>
      <div>
        <img
          src={cat404Jpg}
          width={`100%`}
          alt={`Cat on the page that is not found`}
        />
      </div>
    </>
  );
};

export default NotFoundContainer;
