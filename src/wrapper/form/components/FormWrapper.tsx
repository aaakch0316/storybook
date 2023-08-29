import { useState } from "react";
import { FormDataProps } from "../Form";
import FormInput from "./Forminput";

const initialErrorData: FormDataProps = {
  id: "",
  pw: "",
  confirmPw: "",
};

const FormWrapper = () => {
  const [errorData, setErrorData] = useState(initialErrorData);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const isValid = Object.values(errorData).every((value) => value === true);
    // isValid && modalRef.current.showModal();
  };
  return (
    <form id="form" className="" autoComplete="off" onSubmit={handleSubmit}>
      <FormInput
        id={"id"}
        label={"아이디"}
        errorData={errorData}
        setErrorData={setErrorData}
        inputProps={{
          type: "text",
          placeholder: "아이디를 입력해주세요.",
          // autoFocus: true,
        }}
      />
      <FormInput
        id={"pw"}
        label={"비밀번호"}
        errorData={errorData}
        setErrorData={setErrorData}
        inputProps={{
          type: "password",
          placeholder: "비밀번호를 입력해주세요",
          autoComplete: "off",
        }}
      />
      <FormInput
        id={"confirmPw"}
        label={"비밀번호 확인"}
        errorData={errorData}
        setErrorData={setErrorData}
        inputProps={{
          type: "password",
          placeholder: "비밀번호 확인을 입력해주세요.",
          autoComplete: "off",
        }}
      />
      <div className="">
        <input id="submit" type="submit" className="" value="가입하기" />
      </div>
    </form>
  );
};

export default FormWrapper;
