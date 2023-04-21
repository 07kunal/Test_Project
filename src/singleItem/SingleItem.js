import React, { useEffect, useState, useMemo } from 'react'

function SingleItem() {
    const singleData = ["kunal", "gatuam", 25, "unmarid"]
    const [step, setStep] = useState(0)
    const [querry, setQuerry] = useState("")

    const showStep = (i) => {
        switch (i) {
            case i:
                return setQuerry(singleData[i])
        }
    }
    useMemo(() => {
        showStep(step)
        console.log("hello")
    }, [step])

    return (
        <div>

            <h1>{querry}</h1>


            <br />
            <button className='upword' onClick={() => setStep(step + 1)} >next</button>
            <br />
            <button className='downward' onClick={() => setStep(step - 1)} disabled={step === 0 ? true : false}>previous</button>

        </div>
    )
}

export default SingleItem