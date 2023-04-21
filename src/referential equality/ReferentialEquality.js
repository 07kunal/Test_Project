import React, { useEffect, useState,useMemo } from 'react'
//parent component
function ReferentialEquality() {
    const [count, setCount] = useState(0);
    const [animalObj, setAnimalObj] = useState({ animal: 'dog' });
    // const animalList = [
    //     { animal: 'dog' },
    //     { animal: 'cat' },
    //     { animal: 'turtle' },
    // ];
    const animalList = useMemo(
        () => [{ animal: 'dog' }, { animal: 'cat' }, { animal: 'turtle' }],
        []
      );


    const handleChange = () => {
        setAnimalObj({
            ...animalObj,
            animal: animalObj.animal === 'cat' ? 'dog' : 'cat',
        });
    }
    // useEffect(() => {
    //     document.body.append(`I am this animal: ${animalObj.animal}`);
    //     var br = document.createElement('br');
    //     document.body.appendChild(br);
    // }, [animalObj]);
    // console.log(animalObj)
    return (
        <div>
            <ChildComponent data={animalList} />
            {/* <h2>{`i have this animal: ${animalObj.animal}`}</h2> */}
            <span>Count: {count}</span>
            {/* <button onClick={handleChange
            }>click me to change the animal</button> */}
             <button onClick={() => setCount(count + 1)}>Increment count</button>
        </div>
    )
}


//childComponent

const ChildComponent = ({ data }) => {

    useEffect(() => {
        document.body.append(`Child rendered! Data has changed!`);
        var br = document.createElement('br');
        document.body.appendChild(br);
    }, [data]);
    return (
        <ul>
            {data.map((item, index) => (
                <li key={index}>{item.animal}</li>
            ))}
        </ul>
    );
};
export default ReferentialEquality