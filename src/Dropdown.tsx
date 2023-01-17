/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "@storybook/addons";
import { createContext, ReactNode, useContext, useState } from "react";

interface SelectOption {
  // children: ReactNode;
  // value?: string | null;
  label: string;
}

interface ISelectContext {
  open: Boolean;
  setOpen: (data: Boolean) => void;
}

const SelectContext = createContext<ISelectContext | undefined>();

// typescript는 조금 더 공부 하고 추가하겠습니다.
const Select: React.FC = ({
  children,
  onChange,
  defaultValue,
  placeholder,
}) => {
  const [open = false, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const selectPlaceholder = placeholder || "Choose an option";

  const updateSelected = (option) => {
    onChange(option);
    setSelected(option);
    setTimeout(() => {
      setOpen(false);
    }, 400);
  };

  const handlingButton = () => {
    if (!open) {
      setOpen((prev) => !prev);
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
        handlingButton,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

const Trigger = () => {
  const { setOpen, selected, selectPlaceholder, handlingButton } =
    useContext(SelectContext);

  return (
    <button
      onClick={() => handlingButton()}
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

const OptionList = ({ children }) => {
  const { open } = useContext(SelectContext);
  return (
    <ul
      role="listbox"
      css={open ? styleOpenOptionList : styleUnopenOptionList}
      aria-labelledby="select-box-1"
      id="select-list"
      role="listbox"
    >
      {open ? children : null}
    </ul>
  );
};

const Option: React.FC<SelectOption> = ({ children, value }) => {
  const { selected, updateSelected } = useContext(SelectContext);

  return (
    <li onClick={(e) => updateSelected(e.target.innerText)}>{children}</li>
  );
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
