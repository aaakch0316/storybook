import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import Select from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState(null);

  const updateValue = (target: any) => {
    setValue(target);
  };
  return (
    <div
      style={{
        background: "#f2f4f6",
        width: "100%",
        height: "90vh",
        padding: "20px",
      }}
    >
      <Select
        onChange={updateValue}
        defaultValue={args.defaultValue}
        placeholder={args.placeholder}
        values={args.values}
      >
        <Select.Trigger />
        <Select.OptionList>
          {args.values.map((optionItem: String) => (
            <Select.Option value={optionItem}>{optionItem}</Select.Option>
          ))}
        </Select.OptionList>
      </Select>
      {/* <div>{value}</div> */}
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  values: ["1억원 미만", "1~5억원", "5억원 초과"],
  placeholder: "선택하세요",
  defaultValue: "",
};
