import React from "react";
import { shallow } from "enzyme";
import ClientsOfEmploye from "./ClientsOfEmploye";

describe("ClientsOfEmploye", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientsOfEmploye />);
    expect(wrapper).toMatchSnapshot();
  });
});
