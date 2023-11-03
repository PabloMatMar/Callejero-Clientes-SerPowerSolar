import React from "react";
import { shallow } from "enzyme";
import TimeToCall from "./TimeToCall";

describe("TimeToCall", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TimeToCall />);
    expect(wrapper).toMatchSnapshot();
  });
});
