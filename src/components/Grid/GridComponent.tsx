import React, {useEffect} from 'react'

const GridComponent = () => {
    useEffect(()=>{
        fetch("/basket/items").then(result => result)
            .then(data => data.json())
        .catch( err => {
            throw(new Error(err))
        }).finally(()=>{
            console.log("Successfully fetched sample data")
        })
    },[])

    return (
        <div>
            
        </div>
    )
}

export default GridComponent
