import React from "react";
import { render, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { MockedProvider } from '@apollo/react-testing';
import gql from "graphql-tag";

import Details from "./index";

configure({ adapter: new Adapter() });

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

const mocks = [
    {
        request: {
            query: getDetails,
            variables: {
                id: "1",
            },
        },
        result: {
            data: {
                character: {
                    id: "1",
                    name: "Rick Sanchez",
                    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                    status: "Alive",
                    gender: "Male"
                },
            },
        },
    },
];

describe("Character Details", () => {
    it("renders without errors", () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Details
                    match={{
                        params: {
                            id: "1",
                        },
                    }}
                />
            </MockedProvider>
        );
    });
});