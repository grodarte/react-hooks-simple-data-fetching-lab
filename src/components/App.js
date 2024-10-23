import { useState, useEffect } from "react";

function App() {
    const [dogImage, setDogImage] = useState("")

    useEffect(()=>{
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(r=>r.json())
        .then(dogData=>setDogImage(dogData.message))
    }, [])

    if(!dogImage){
        return <p>Loading...</p>
    }

    return (
        <img src={dogImage} alt="A Random Dog"/>
    )
}

export default App