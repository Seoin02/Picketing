import { useState } from 'react';
const useListOpen = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return { isClicked, handleClick };
};
export default useListOpen;
