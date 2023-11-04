import React from "react";
import { shallow } from "enzyme";
import SearchAClient from "./SearchAClient";

describe("SearchAClient", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchAClient />);
    expect(wrapper).toMatchSnapshot();
  });
});
