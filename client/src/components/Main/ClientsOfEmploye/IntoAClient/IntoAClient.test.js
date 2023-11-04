import React from "react";
import { shallow } from "enzyme";
import IntoAClient from "./IntoAClient";

describe("IntoAClient", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<IntoAClient />);
    expect(wrapper).toMatchSnapshot();
  });
});
