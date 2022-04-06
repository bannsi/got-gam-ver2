import React from 'react';

function takeTimeFunc(func: () => void, delay = 500) {
  setTimeout(() => func(), delay);
}
export default takeTimeFunc;
