import { useState } from "react"; 

export const useCount = (initalVal = 0) => {

    const [count, setCount] = useState(initalVal);
    
    const increase = () => {
        setCount((prevCount) => prevCount + 1);
    };
    
    const decrease = () => {
        setCount((prevCount) => prevCount - 1);
    };
    
    const reset = () => {
        setCount(0);
    };
    
    return { count, increase, decrease, reset };


}