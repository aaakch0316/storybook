// /** @jsx jsx */
import { css } from '@emotion/react';
import React from 'react';

interface ButtonProps {
  /**
   * 내부에 들어갈 text
   */
  label: string;
}

/**
 * Button Component
 * 
 * - size를 나타냅니다.
 */
export const Button = ({
  label
}: ButtonProps) => {
  return (
    <button css={style}>
      {label}
    </button>
  );
};

const style = css`
  font-size: 300px
`;