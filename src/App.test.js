import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";

import { MockedProvider } from '@apollo/react-testing';
import { render, configure } from 'enzyme';

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  render(
    <MockedProvider>
      <App />
    </MockedProvider>
  );
});