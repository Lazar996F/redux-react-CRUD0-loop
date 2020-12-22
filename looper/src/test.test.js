import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./components/Dropdown";
import toJson from "enzyme-to-json";

const mockitems = [
  { value: "val 1", id: "1" },
  { value: "val 2", id: "2" },
  { value: "val 3", id: "3" },
  { value: "val 4", id: "4" },
];

it("it should render correctly", () => {
  const wrapper = shallow(<Dropdown items={mockitems} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
const mockSelected = jest.fn();
it("it should call handleChange function when value has change", () => {
  const wrapper = shallow(
    <Dropdown handleSelected={mockSelected} items={mockitems} />
  );
  wrapper
    .find(".test-select")
    .simulate("change", { target: { value: "val 1" } });
  expect(mockSelected).toBeCalledWith({ target: { value: "val 1" } });
});

it("it should open dropdown when click", () => {
  const wrapper = shallow(<Dropdown items={mockitems} />);
  wrapper.find(".test-select").simulate("click");
});
