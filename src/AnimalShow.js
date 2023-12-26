import "./AnimalShow.css";
import dog from "./animals/dog.svg";
import cat from "./animals/cat.svg";
import cow from "./animals/cow.svg";
import horse from "./animals/horse.svg";
import gator from "./animals/gator.svg";
import bird from "./animals/bird.svg";
import heart from "./animals/heart.svg";
import { useState } from "react";

const imageMapper = {
    dog,
    cat,
    cow,
    horse,
    gator,
    bird,
};

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }
    return (
        <div className="animal-show">
            <img  className="animal" onClick={handleClick} alt="animal" src={imageMapper[type]} />
            <img
            className="heart"
            alt="hear" 
            src={heart} 
            style={{ width: 10 + 10 * clicks + 'px' }}
            />
        </div>
    );
}

export default AnimalShow;
