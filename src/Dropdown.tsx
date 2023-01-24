/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "@storybook/addons";
import {
  createContext,
  MouseEvent,
  ReactNode,
  useContext,
  useState,
} from "react";

type SelectStatusContext = {
  open?: Boolean;
  setOpen?: (data: Boolean) => void;
  selected: String;
  setSelected?: (data: String) => void;
  selectPlaceholder?: String;
  updateSelected: (data: String) => void;
  handleButton: () => void;
};

interface SelectProps {
  children: ReactNode;
  onChange: (data: any) => void;
  defaultValue: String;
  placeholder: String;
  values: String[];
}

const SelectContext = createContext<SelectStatusContext | null>(null);

// typescript는 조금 더 공부 하고 추가하겠습니다.
const Select = ({
  children,
  onChange,
  defaultValue,
  placeholder,
}: SelectProps) => {
  const [open = false, setOpen] = useState<Boolean>(false);
  const [selected, setSelected] = useState<String>(defaultValue);
  const selectPlaceholder = placeholder || "Choose an option";

  const updateSelected = (option: String) => {
    onChange(option);
    setSelected(option);
    setTimeout(() => {
      setOpen(false);
    }, 400);
  };

  const handleButton = () => {
    if (!open) {
      setOpen((prev: Boolean) => !prev);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 400);
    }
  };

  return (
    <SelectContext.Provider
      value={{
        open,
        setOpen,
        selected,
        setSelected,
        selectPlaceholder,
        updateSelected,
        handleButton,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

const Trigger = () => {
  const { setOpen, selected, selectPlaceholder, handleButton } = useContext(
    SelectContext
  ) as SelectStatusContext;

  return (
    <button
      onClick={() => handleButton()}
      type="button"
      id="select-box-1"
      aria-haspopup="true"
      aria-expanded="true"
      aria-controls="select-list"
    >
      {selected.length > 0 ? selected : selectPlaceholder}
    </button>
  );
};

interface OptionListProps {
  children: ReactNode;
}

const OptionList = ({ children }: OptionListProps) => {
  const { open } = useContext(SelectContext) as SelectStatusContext;
  return (
    <ul
      role="listbox"
      css={open ? styleOpenOptionList : styleUnopenOptionList}
      aria-labelledby="select-box-1"
      id="select-list"
    >
      {open ? children : null}
    </ul>
  );
};
interface OptionProps {
  children: ReactNode;
  value?: String;
  // children: ReactNode;
  // value?: string | null;
  // label: string;
}
type CustomMouseEvent = MouseEvent<HTMLElement>;

const Option = ({ children }: OptionProps) => {
  const { selected, updateSelected } = useContext(
    SelectContext
  ) as SelectStatusContext;

  const handleSelectInnerTest = (e: CustomMouseEvent) => {
    const eventTarget = e.target as HTMLElement;
    updateSelected(eventTarget.innerText);
  };

  return <li onClick={handleSelectInnerTest}>{children}</li>;
};
Select.Trigger = Trigger;
Select.Option = Option;
Select.OptionList = OptionList;

const styleUnopenOptionList = ({}) => {
  return css`
    @keyframes styleUnopenOptionList {
      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(-100%);
      }
    }
    animation: styleUnopenOptionList 0.4s ease;
    overflow: hidden;
  `;
};

const styleOpenOptionList = ({}) => {
  return css`
    @keyframes styleOpenOptionList {
      0% {
        transform: translateY(-100%);
      }

      100% {
        transform: translateY(0);
      }
    }
    overflow: hidden;
    animation: styleOpenOptionList 0.4s ease;
  `;
};

export default Select;
