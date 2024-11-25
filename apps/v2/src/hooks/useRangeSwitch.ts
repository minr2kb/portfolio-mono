import { useState } from 'react';

const useRangeSwitch = (): [boolean, (val: number, min?: number, max?: number) => void] => {
  const [isOn, setIsOn] = useState(false);

  const onRange = (val: number, min?: number, max?: number) => {
    if ((!min || val >= min) && (!max || val <= max)) setIsOn(true);
    else setIsOn(false);
  };

  return [isOn, onRange];
};

export default useRangeSwitch;
