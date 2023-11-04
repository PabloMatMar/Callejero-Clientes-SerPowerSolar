import React from "react";
import { shallow } from "enzyme";
import GetAllClients from "./GetAllClients";

describe("GetAllClients", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GetAllClients />);
    expect(wrapper).toMatchSnapshot();
  });
});
