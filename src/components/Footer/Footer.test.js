import React from "react";
import { shallow } from "enzyme";

import logo from "./assets/logo.svg";
import Footer from "./index";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("a")).toHaveLength(1);
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it("renders logo correctly", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("img").prop("src")).toEqual(logo);
  });
});
