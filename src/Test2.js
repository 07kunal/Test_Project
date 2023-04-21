import React, { useCallback, useState } from 'react'
import Callback from './hooks/Callback'

function Test2() {
  const [add, setAdd] = useState([])
  const [count, setCount] = useState(10)

  // const learning = useCallback(() => {
  //   return console.log("learing as props")
  // }, [add])
  // const addTodo = () => {
  //   setAdd((prev) => [...prev, `new Entry`])
  // }
  const addTodo= useCallback(()=>{
    setAdd((prev) => [...prev, `new Entry`])

  },[add])

  return (
    <div>
      {/* <h1>call back</h1>
      <h2>add{add}</h2> */}
      {/* <button onClick={() => setAdd(add + 10)}>add</button> */}

      <h2>multiplication{count}</h2>
      <button onClick={() => setCount(count * 10)}>multiply</button>
      <Callback addTodo={addTodo} add={add} />
    </div>
  )
}

export default Test2