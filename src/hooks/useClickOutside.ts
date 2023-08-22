import { useEffect, RefObject } from 'react';

const useClickOutside = (
  targetRef: RefObject<HTMLElement>,
  callback: () => void,
  // eslint-disable-next-line comma-dangle
  dependencyProp: Readonly<boolean>
): void => {
  const handleClickOutside = (event: MouseEvent): void => {
    if (targetRef.current && targetRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    callback();
  };

  useEffect(() => {
    if (dependencyProp) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dependencyProp]);
};

export default useClickOutside;
