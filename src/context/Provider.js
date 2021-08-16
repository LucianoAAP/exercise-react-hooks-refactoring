// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const INITIAL_STATE = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
  signal: {
    color: 'red',
  },
}

const Provider = ({ children }) => {
  const [cars, setCars] = useState(INITIAL_STATE.cars);
  const [signal, setSignal] = useState(INITIAL_STATE.signal);
  const moveCar = (car, side) => {
    setCars({ ...cars, [car]: side });
  };

  const changeSignal = (signalColor) => {
    setSignal({ color: signalColor });
  };

  const context = {
    ...cars,
    signal,
    moveCar,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
