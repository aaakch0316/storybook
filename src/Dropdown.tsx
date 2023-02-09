/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, {
  createContext,
  MouseEvent,
  ReactNode,
  useContext,
  useEffect,
  useRef,
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
  closeSelectBox: () => void;
  handleKeyDown: (
    order: number,
    event: React.KeyboardEvent<HTMLLIElement>
  ) => void;
  optionRef: React.MutableRefObject<HTMLLIElement[]>;
};

interface SelectProps {
  children: ReactNode;
  onChange: (data: any) => void;
  defaultValue: String;
  placeholder: String;
  values: String[];
}

const SelectContext = createContext<SelectStatusContext | null>(null);

const Select = ({
  children,
  onChange,
  defaultValue,
  placeholder,
}: SelectProps) => {
  const [open = false, setOpen] = useState<Boolean>(false);
  const [selected, setSelected] = useState<String>(defaultValue);
  const optionRef = useRef<HTMLLIElement[]>([]);
  const selectPlaceholder = placeholder || "Choose an option";

  useEffect(() => {
    if (open === true) {
      optionRef.current[0].focus();
    }
  }, [open]);

  const updateSelected = (option: String) => {
    onChange(option);
    setSelected(option);
    setOpen(false);
  };

  const closeSelectBox = () => {
    setOpen(false);
  };

  const handleButton = () => {
    setOpen((prev: Boolean) => !prev);
  };

  const handleKeyDown = (
    order: number,
    event: React.KeyboardEvent<HTMLLIElement>
  ) => {
    switch (event.keyCode) {
      case 38:
        if (order > 0) {
          optionRef.current[order - 1].focus();
        }
        break;
      case 39:
        if (order < optionRef.current.length - 1) {
          optionRef.current[order + 1].focus();
        }
        break;
      case 40:
        if (order < optionRef.current.length - 1) {
          optionRef.current[order + 1].focus();
        }
        break;
      case 37:
        if (order > 0) {
          optionRef.current[order - 1].focus();
        }
        break;
      case 9:
        break;
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
        handleKeyDown,
        closeSelectBox,
        optionRef,
      }}
    >
      <div css={styleSelect}>{children}</div>
    </SelectContext.Provider>
  );
};

const Trigger = () => {
  const { open, selected, selectPlaceholder, handleButton, closeSelectBox } =
    useContext(SelectContext) as SelectStatusContext;
  const optionListRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: any) => {
    const eventTarget = event.target as HTMLElement;

    if (optionListRef.current !== eventTarget) {
      closeSelectBox();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <label htmlFor="select-box-1" css={styleTriggerLabel}>
        Monthly payment (transaction) limit
      </label>
      <button
        ref={optionListRef}
        onClick={() => handleButton()}
        type="button"
        tabIndex={0}
        id="select-box-1"
        css={selected.length > 0 ? styleSelectedTrigger : styleTrigger}
        aria-expanded={open ? true : false}
      >
        <div>{selected.length > 0 ? selected : selectPlaceholder}</div>
        <div>&#8744;</div>
      </button>
    </>
  );
};

interface OptionListProps {
  children: ReactNode;
}

const OptionList = ({ children }: OptionListProps) => {
  const { open, optionRef } = useContext(SelectContext) as SelectStatusContext;

  return (
    <ul
      role="listbox"
      css={styleOptionListContainer}
      // css={open ? styleOpenOptionList : styleUnopenOptionList}
      // aria-labelledby="select-box-1"
      id="select-list"
    >
      {open ? children : null}
    </ul>
  );
};
interface OptionProps {
  children: ReactNode;
  order: number;
  value?: String;
  // children: ReactNode;
  // value?: string | null;
  // label: string;
}
type CustomMouseEvent = MouseEvent<HTMLElement>;

const Option = ({ children, order }: OptionProps) => {
  const { updateSelected, optionRef, handleKeyDown } = useContext(
    SelectContext
  ) as SelectStatusContext;

  const handleSelectInnerTest = (e: CustomMouseEvent) => {
    const eventTarget = e.target as HTMLElement;
    updateSelected(eventTarget.innerText);
  };

  return (
    <li
      key={`${order}-option`}
      css={styleOption}
      ref={(el: HTMLLIElement) => (optionRef.current[order] = el)}
      onClick={handleSelectInnerTest}
      onKeyDown={(event) => handleKeyDown(order, event)}
      tabIndex={0}
    >
      {children}
    </li>
  );
};
Select.OptionList = OptionList;
Select.Trigger = Trigger;
Select.Option = Option;

const styleSelect = () => {
  return css`
    position: relative;
    padding: 0px;
  `;
};

const styleOptionListContainer = () => {
  return css`
    position: absolute;
    padding: 0px;
    margin: 0px;
    border: 1px solid #d1d6db

    width: 300px;
    top: 80px;
    left: 10px;
    background: #fff;
    color: #0062cc;
    text-align: left;
    border-radius: 8px;
    /* box-shadow: 0 8px 16px 0 rgba(2,32,71,0.05); */
    box-shadow: 0 4px 8px 0 rgba(0,27,55,0.1);
  `;
};

const styleTriggerLabel = () => {
  return css`
    margin: 10px;
  `;
};

const styleSelectedTrigger = () => {
  return css`
    position: relative;
    background: white;
    color: black;
    border: 1px solid #d1d6db;
    /* border: 1px solid transparent; */

    width: 350px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;

    border-radius: 0.25rem;
    font-weight: 400;
    text-align: left;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 0.85rem;
    line-height: 1.5;
    cursor: pointer;

    :hover {
      border-color: #0069d9;
    }
  `;
};

const styleTrigger = () => {
  return css`
    position: relative;
    background: white;
    color: #8b95a1;
    border: 1px solid #d1d6db;
    /* border: 1px solid transparent; */

    width: 350px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;

    border-radius: 0.25rem;
    font-weight: 400;
    text-align: left;
    white-space: nowrap;
    font-size: 0.85rem;
    cursor: pointer;

    :hover {
      border-color: #0069d9;
    }
  `;
};

const styleOption = () => {
  return css`
    list-style: none;
    font-size: 14px;
    padding: 10px 15px;
    margin: 7px;
    color: black;
    outline: none;
    border-radius: 3px;

    :focus {
      background-color: rgb(242, 244, 246);
      color: #0069d9;
    }
    :hover {
      background-color: rgb(242, 244, 246);
      color: #0069d9;
    }
  `;
};

export default Select;
