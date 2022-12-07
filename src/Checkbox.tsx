/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface CheckboxProps {
  /**
   * Checkbox content
   */
  label: string;
}

const Checkbox = ({
  label
}: CheckboxProps) => {
  return (
    <>
      <input type="checkbox" id="check1" />
      <label id="check1"></label>
    </>
  )
}

export default Checkbox;