import React, { useEffect, useMemo, useState } from 'react'

function UseMemoHook() {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)
    const [updatedValue, setUpdatedValue] = useState(0)

    // function multiCount(){
    // console.log("this is working")
    //     return count*5
    // }
    // here this func is call when count is increase but it should'nt call when item is increase so , which will slow the performance of the app.  NOW THE BETTER WAY TO DO THAT USING USEMEMO HOOKS

    // useEffect(() => {
    //     function multicount() {
    //         console.log('this is working')
    //         setUpdatedValue(count * 5)
    //     }
    //     multicount()
    // }, [count])
    const fetchCount = useMemo(function multiCount() {
        console.log('this is working')
        return count * 5;
    },[count])

    return (
        <div>

            <h2>count:{count}</h2>
            <h2>item:{item}</h2>
            {/* <h2>update value:{updatedValue}</h2> */}
            <h2>update value:{fetchCount}</h2>


            <button onClick={() => setCount(count + 1)}>count increse</button>
            <button onClick={() => setItem(item * 10)}>item increse</button>


        </div>
    )
}

export default UseMemoHook