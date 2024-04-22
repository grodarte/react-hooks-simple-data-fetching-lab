// create your App component here
import React, { useEffect, useState } from "react";

function App(){
    const [dogImage, setDogImage] = useState(null)

    useEffect(()=>{
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res=>res.json())
        .then(dogData=>setDogImage(dogData.message))
    }, [])

    if(!dogImage) return <p>Loading...</p>
    return (
        <img src={dogImage} alt="A Random Dog"/>
    )
}

export default App