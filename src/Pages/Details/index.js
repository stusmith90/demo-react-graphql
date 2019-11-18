import React from "react";
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import "./styles.scss";


const getDetails = gql`
  query character($id: ID!) {
    character(id: $id) {
        id
        name
        image
        status
        gender
    }
  }
`;

function Details({ match }) {

    const id = match.params.name;
    const { loading, error, data } = useQuery(getDetails, {
        variables: { id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error}`;
    const character = data.character;

    return (
        <div className="details">
            <Link className="details__back-button" to="/">Back</Link>
            <img className="details__image" alt={`${character.name}`} src={character.image} />
            <h1 className="details__name">{character.name}</h1>
            <p className="details__status">{character.status}</p>
            <p className="details__gender">{character.gender}</p>
        </div>
    );
}

export default Details;