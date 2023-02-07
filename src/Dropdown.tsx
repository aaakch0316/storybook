/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
    setOpen(false);
  };

  const handleButton = () => {
    setOpen((prev: Boolean) => !prev);
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
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
      <div css={styleSelect}>{children}</div>
    </SelectContext.Provider>
  );
};

const Trigger = () => {
  const { selected, selectPlaceholder, handleButton } = useContext(
    SelectContext
  ) as SelectStatusContext;

  return (
    <>
      <label htmlFor="select-box-1" css={styleTriggerLabel}>
        Monthly payment (transaction) limit
      </label>
      <button
        onClick={() => handleButton()}
        type="button"
        tabIndex={0}
        id="select-box-1"
        css={styleTrigger}
        // aria-haspopup="true"
        // aria-expanded="true"
        // aria-controls="select-list"
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
  const { open } = useContext(SelectContext) as SelectStatusContext;

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
  value?: String;
  // children: ReactNode;
  // value?: string | null;
  // label: string;
}
type CustomMouseEvent = MouseEvent<HTMLElement>;

const Option = ({ children }: OptionProps) => {
  const { updateSelected } = useContext(SelectContext) as SelectStatusContext;

  const handleSelectInnerTest = (e: CustomMouseEvent) => {
    const eventTarget = e.target as HTMLElement;
    updateSelected(eventTarget.innerText);
  };

  return (
    <li css={styleOption} onClick={handleSelectInnerTest} tabIndex={0}>
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
    border-radius: 0.25rem;
  `;
};

const styleTriggerLabel = () => {
  return css`
    margin: 10px;
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
    :focus{
      border-color: #0069d9;
  `;
};

const styleOption = () => {
  return css`
    list-style: none;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* font-size: 1.6rem; */
    /* padding: 1rem; */
    /* z-index: 1; */
    /* margin-top: 0.2rem; */
  `;
};

const styleUnopenOptionList = ({}) => {
  return css`
    /* @keyframes styleUnopenOptionList {
      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(-100%);
      }
    }
    overflow: hidden;
    animation: styleUnopenOptionList 0.4s ease; */
    /* dsf */
  `;
};

const styleOpenOptionList = ({}) => {
  return css`
    /* @keyframes styleOpenOptionList {
      0% {
        transform: translateY(-100%);
      }

      100% {
        transform: translateY(0);
      }
    }
    overflow: hidden;
    animation: styleOpenOptionList 0.4s ease; */
  `;
};

export default Select;
