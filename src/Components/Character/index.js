import React from "react";

import "./styles.scss"

function Character(props) {
    return (
        <div className="character">
            <img className="character__image" alt={props.characterName} src={props.characterImg} />
            <p className="character__name">{props.characterName}</p>
            <p className="character__status">{props.characterStatus}</p>
            <p className="character__gender">{props.characterGender}</p>
        </div>
    );
}

export default Character;