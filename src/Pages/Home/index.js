import React from "react";

import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";

import Character from "../../Components/Character";

const getDataQuery = gql`
  query {
      characters{
        results{
          id
          name
          image
          status
          gender
        }
      }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(getDataQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data.characters.results.map(character => (
        <Link to={`/${character.id}`} key={character.id}>
          <Character characterImg={character.image} characterName={character.name} characterStatus={character.status} characterGender={character.gender} />
        </Link>
      ))}
    </>
  );
}

export default Home;