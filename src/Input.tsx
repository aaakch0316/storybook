/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface InputProps {
  /**
   * Input placeholder
   */
  label: string;
}

const Input = ({
  label
}: InputProps) => {
  return (
    <input placeholder={label} />
  )
}

export default Input;