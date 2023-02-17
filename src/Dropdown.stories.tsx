import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import Select from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<string>('');

  const updateValue = (target: string) => {
    setValue(target);
  };
  return (
    <div
      style={{
        background: "#f2f4f6",
        width: "90%",
        height: "70vh",
        padding: "20px",
        fontFamily: "sans-serif",
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
          {args.values.map((optionItem: String, index: number) => (
            <Select.Option order={index} key={`${index}-option`} value={optionItem}>
              {optionItem}
            </Select.Option>
          ))}
        </Select.OptionList>
      </Select>
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  values: ["1억원 미만", "1~5억원", "5억원 초과"],
  placeholder: "선택하세요",
  defaultValue: "",
};
