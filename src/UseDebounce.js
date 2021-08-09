import { useRef } from 'react';

const UseDebounce = (fn, delay) => {
  const timeoutRef = useRef(null);
  function debouncedFn(...args) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }
  return debouncedFn;
};

export default UseDebounce;
