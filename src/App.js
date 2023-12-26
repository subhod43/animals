import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function generateRandomAnimal() {
    const animals = ['dog', 'cat', 'cow', 'bird', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);
    
    const handleClick = () => {
        setAnimals([...animals, generateRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}

export default App;