import React, { useEffect, useState } from 'react'

function useData(url) {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const call = await fetch(url)

        const res = await call.json()
        if (res) {
            // console.log(res.products)
            setData(res.products)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(data)
    return (
        
        [data]
    )
}

export default useData