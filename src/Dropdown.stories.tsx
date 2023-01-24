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
    <>
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
        <div>{value}</div>
      </Select>
    </>
  );
};

export const Base = Template.bind({});
Base.args = {
  values: ["리액트", "넥스트", "앵귤러"],
  placeholder: "선택하세요~!",
  defaultValue: "",
};
