import React from "react";
import { render, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { MockedProvider } from '@apollo/react-testing';

configure({ adapter: new Adapter() });

import Home from "./index";

describe("Home Page", () => {
    it("should render without crashing", () => {
        render(
            <MockedProvider>
                <Home />
            </MockedProvider>
        );
    });
});