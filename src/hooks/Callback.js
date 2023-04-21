import React, { memo, useEffect, useState } from 'react'


function Callback(props) {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)
    console.log("this is callback component ")
    // console.log(props.learning())
    return (
        <div>

            <h1>useCall back hook</h1>
            <div>

                <h2>My Todos</h2>
                {props.add?.map((item, index) => {
                    return <p key={index}>{item + index}</p>
                })}
                <button onClick={props.addTodo}>Add Todo </button>
                {/* 
                <h2>count:{count}</h2>
                <h2>item:{item}</h2>
           



                <button onClick={() => setCount(count + 1)}>count increse</button>
                <br />
                <button onClick={() => setItem(item * 10)}>item increse</button> */}


            </div>
        </div>
    )
}

export default memo(Callback)