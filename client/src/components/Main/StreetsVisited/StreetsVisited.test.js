import React from "react";
import { shallow } from "enzyme";
import StreetsVisited from "./StreetsVisited";

describe("StreetsVisited", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StreetsVisited />);
    expect(wrapper).toMatchSnapshot();
  });
});
