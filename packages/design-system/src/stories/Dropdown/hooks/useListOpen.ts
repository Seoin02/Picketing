import { useState } from 'react';

export type useListOpenState = {
  isClicked: boolean;
  handleClick: () => void;
};

const useListOpen = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return { isClicked, handleClick };
};

export default useListOpen;
