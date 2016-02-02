/* eslint-disable no-inner-declarations, no-console */

import invariant from 'invariant';

export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const idFn = (x) => x;

export const arrayToObj = (array, getKeyFromElem) => array.reduce(
  (res, elem) => {
    const field = getKeyFromElem(elem);
    if (typeof field !== 'undefined') {
      res[field] = elem; // eslint-disable-line no-param-reassign
    }
    return res;
  },
  {},
);

export const flatMap = (lss, fn) => {
  invariant(typeof fn === 'function', `expected a function, received ${fn}`);

  return [].concat(...lss.map(fn));
};

export const seqToObj = (seq, fn) => seq.reduce(
  (res, x) => {
    if (fn) {
      res[x] = fn(x); // eslint-disable-line no-param-reassign
    } else {
      res[x] = true; // eslint-disable-line no-param-reassign
    }
    return res;
  },
  {},
);

export const arrayPop = (array, idx) => {
  invariant(idx >= 0, `expected idx (which should >= 0), got ${idx}`);
  return array.slice(0, idx).concat(array.slice(idx + 1));
};

export const oxfordJoin = (seq = []) => {
  const len = seq.length;

  if (len <= 2) {
    return seq.join(' and ');
  }

  return seq.reduce(
    (res, str, idx) => idx === len - 1 ? `${res}, and ${str}` : `${res}, ${str}`,
  );
};

if (__DEV__) {
  function log(stuff = this) {
    console.log(stuff);
    return stuff;
  }

  window.l = log;
}
