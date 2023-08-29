/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { createContext, useRef, useState } from "react";
import FormWrapper from "./components/FormWrapper";
import FontControlBox from "./components/FontControlBox";

interface FormProps {
  test: string;
}

export interface FormDataProps {
  id: string;
  pw: string;
  confirmPw: string;
}

const initialFormData = {
  id: "",
  pw: "",
  confirmPw: "",
};

export const FormContext = createContext({
  formData: initialFormData,
  setFormData: (initialFormData: any) => initialFormData,
});

const Form = (props: FormProps) => {
  const [formData, setFormData] = useState(initialFormData);
  const modalRef = useRef(null);
  const value: any = { formData, setFormData };
  return (
    <FormContext.Provider value={value}>
      <section className="">
        <FormWrapper />
      </section>
      <FontControlBox />
    </FormContext.Provider>
  );
};

export default Form;

{
  /* <>
<div>{props.test}</div>
<section className="form-wrapper">
  <form id="form" className="" autoComplete="off">
    <div>
      <label htmlFor="id" className="">
        아이디
      </label>
      <input
        id="id"
        className=""
        type="text"
        placeholder="아이디를 입력해주세요."
      />
      <div id="id-msg" className=""></div>
    </div>
    <div>
      <label htmlFor="pw" className="">
        비밀번호
      </label>
      <input
        id="pw"
        type="password"
        className=""
        placeholder="비밀번호를 입력해주세요."
        autoComplete="off"
      />
      <div id="pw-msg" className=""></div>
    </div>
    <div>
      <label htmlFor="pw" className="">
        비밀번호 확인
      </label>
      <input
        id="pw-check"
        type="password"
        className=""
        placeholder="비밀번호 확인을 입력해주세요."
        autoComplete="off"
      />
      <div id="pw-check-msg" className=""></div>
    </div>
    <div className="">
      <input id="submit" type="submit" className="" value="가입하기" />
    </div>
  </form>
  <footer className="">©2023 Hy Corp. All rights reserved</footer>
</section>
</> */
}
