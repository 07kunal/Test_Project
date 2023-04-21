import { useState, useEffect, useRef } from "react";


function Test() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    // const [count,setCount]= useState(0)
    const prevState = useRef("")
    const colorRef = useRef()

    useEffect(() => {
        count.current = count.current + 1;
        
        prevState.current = inputValue
        // console.log(prevState.current
        //     )
    });
    const clickHandler = ()=>{
        colorRef.current.style.color='red'
    }

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                
            />
            <h1>Render Count: {count.current}</h1>
            <h1 ref={colorRef
                }  onClick={clickHandler}>Render Count: {prevState.current}</h1>

        </>
    );
}

export default Test;