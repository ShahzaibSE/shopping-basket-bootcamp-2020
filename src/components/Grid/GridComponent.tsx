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
        items.then(data => {
            console.log("GridComponent - Items")
            console.log(data)
        })
    },[])

    return (
        <div>
            
        </div>
    )
}

export default GridComponent
