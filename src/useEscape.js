import { useState } from 'react';

const useEscape = (initialState = false) => {
    const [isToggled, setIsToggled] = useState(initialState);
    
    const toggle = () => {
        setIsToggled(!isToggled);
    };

    return [isToggled, toggle];
};

export default useEscape;
