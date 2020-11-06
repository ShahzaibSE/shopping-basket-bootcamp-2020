import React, {useEffect} from 'react'

const GridComponent = () => {
    useEffect(()=>{
        let items = fetch("/basket/items").then(result => result)
            .then(data => data.json())
        .catch( err => {
            throw(new Error(err))
        }).finally(()=>{
            console.log("Successfully fetched sample data")
        })
        console.log("Items")
        console.log(items)
    },[])

    return (
        <div>
            
        </div>
    )
}

export default GridComponent
