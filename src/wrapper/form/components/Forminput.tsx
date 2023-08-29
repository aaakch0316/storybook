import { memo, useContext, useEffect, useRef } from "react";
import { FormContext, FormDataProps } from "../Form";

interface FormInputProps {
  id: "id" | "pw" | "confirmPw";
  label: string;
  inputProps: any;
  errorData: FormDataProps;
  setErrorData: React.Dispatch<React.SetStateAction<FormDataProps>>;
}

interface ErrorMsgProps {
  required: string;
  invalidId: string;
  invalidPw: string;
  invalidConfirmPw: string;
}

const ID_REGEX = new RegExp(/^[a-z0-9_-]{5,20}$/);
const PW_REGEX = new RegExp(/^[a-zA-Z0-9]{8,16}$/);

const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidId: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
  invalidPw: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
  invalidConfirmPw: "비밀번호가 일치하지 않습니다.",
};

const FormInput = ({
  id,
  label,
  inputProps,
  errorData,
  setErrorData,
}: FormInputProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const { formData, setFormData } = useContext(FormContext);
  const checkRegex = (inputId: "id" | "pw" | "confirmPw") => {
    let result: boolean | string;
    const value = formData[inputId];
    if (value.length === 0) {
      result = "required";
    } else {
      switch (inputId) {
        case "id":
          result = ID_REGEX.test(value) ? true : "invalidId";
          break;
        case "pw":
          result = PW_REGEX.test(value) ? true : "invalidPw";
          checkRegex("confirmPw");
          break;
        case "confirmPw":
          result = value === formData["pw"] ? true : "invalidConfirmPw";
          break;
        default:
          return;
      }
    }

    setErrorData((prev: FormDataProps) => ({ ...prev, [inputId]: result }));
  };
  useEffect(() => {
    if (id === "id" && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className="">
      <label htmlFor={id} className="">
        {label}
      </label>
      <input
        id={id}
        className=""
        ref={inputRef}
        value={formData[id]}
        onChange={(e) =>
          setFormData((prev: FormDataProps) => ({
            ...prev,
            [id]: e.target.value,
          }))
        }
        onBlur={() => checkRegex(id)}
        {...inputProps}
      />
      <div id="id-msg" className="">
        {errorData[id].length !== 0
          ? ERROR_MSG[
              errorData[id] as
                | "required"
                | "invalidId"
                | "invalidPw"
                | "invalidConfirmPw"
            ]
          : ""}
      </div>
    </div>
  );
};

export default FormInput;
// export default memo(
//   FormInput,
//   (prevProps, nextProps) => prevProps.errorMsg === nextProps.errorMsg
// );

// <div>
//   <label htmlFor={id} className="">
//     {label}
//   </label>
//   <input id={id} className="" {...inputProps} />
//   <div id="id-msg" className="">
//     {errorMsg}
//   </div>
// </div>
