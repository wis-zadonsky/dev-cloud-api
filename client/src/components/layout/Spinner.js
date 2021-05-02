import React, { Fragment } from 'react';
import spinner from './loading.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '450px', margin: 'auto', display: 'flex' }}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner;